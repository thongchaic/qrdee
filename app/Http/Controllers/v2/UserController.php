<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\v2\BaseController;
use App\User;
use Illuminate\Http\Request;

class UserController extends BaseController
{
    /**
     * Constructor.
     *
     * @param AdldapInterface $adldap
     */
    public function __construct()
    {

    }

    /**
     * Displays the all LDAP users.
     *
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        $search_query = $request->searchTerm;
        $perPage = $request->per_page;
        $dataset = User::select([
            'id', 'email', 'initial', 'firstname', 'lastname', 'description',
            'mobile_number', 'promptpay', 'citizen_number', 'address', 'postcode',
            'created_at', \DB::raw("'/assets/img/user/user-3.jpg' as image"),
        ])
            ->where(function ($query) use ($search_query) {
                if ($search_query) {
                    $query->orWhere(\DB::raw("concat(firstname, lastname)"), 'LIKE', '%' . str_replace(' ', '', $search_query) . '%')
                        ->orWhere('email', 'LIKE', '%' . $search_query . '%');
                }
            })
            ->orderBy('id', 'asc')
            ->paginate($perPage)
            ->toArray();

        foreach ($dataset['data'] as $key => $user) {
            $dataset['data'][$key]['roles'] = User::find($user['id'])->getRoleNames();
            $dataset['data'][$key]['full_name'] = $user['firstname'] . '  ' . $user['lastname'];
        }

        if ($search_query) {
            $dataset['searchTerm'] = $search_query ?: '';
        } else {
            $dataset['searchTerm'] = $search_query ? null : '';
        }

        return response()->json($dataset);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        try {
            $user = User::create($input);
        } catch (QueryException $e) {
            switch ($e->errorInfo[1]) {
                case 1062: // Duplicate Entry error code
                    return $this->sendError('E-mail ซ้ำกับ E-mail ที่เคยลงทะเบียนไว้แล้ว! กรุณาตรวจสอบอีกครั้ง!', $e->errorInfo);
                    break;

                default:
                    return $this->sendError('เกิดความผิดพลาด ไม่สามารถลงทะเบียนได้.', $e->errorInfo);
                    break;
            }
        } catch (Exception $e) {
            return $this->sendError('เกิดความผิดพลาด ไม่สามารถลงทะเบียนได้.', $e->message);
        }

        $user->assignRole(['User', 'Customer']);

        return $this->sendResponse([], 'ระบบได้ทำการเพิ่มผู้ใช้เรียบร้อยแล้ว');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $user = User::find($id);

        if (isset($input['action'])) {
            switch ($input['action']) {
                case 'changePassword':
                    if (strcmp($request->get('old_password'), $request->get('new_password')) == 0) {
                        return $this->sendError('รหัสผ่านปัจจุบันและรหัสผ่านใหม่ตรงกัน กรุณาเปลี่ยนรหัสใหม่ให้ต่างจากรหัสปัจจุบัน !', [], 401);
                    }

                    if (\Hash::check($input['old_password'], $user->password)) {
                        $user->password = bcrypt($input['new_password']);
                        $user->save();
                        return $this->sendResponse([], 'ระบบได้ทำการเปลี่ยนรหัสผ่านเรียบร้อยแล้ว.');
                    } else {
                        return $this->sendError('รหัสผ่านปัจจุบันไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง !', [], 401);
                    }
                    break;

                default:
                    return $this->sendResponse([], 'Action not found.');
                    break;
            }
        }

        if (isset($input['roles'])) {
            $user->syncRoles($input['roles']);
        } else {
            $user->removeRole();
        }

        $user->update($input);

        return $this->sendResponse([], 'Update success.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return $this->sendResponse([], 'User deleted successfully.');
    }
}
