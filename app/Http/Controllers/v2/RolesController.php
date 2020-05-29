<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\v2\BaseController;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RolesController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->action) {
            switch ($request->action) {
                case 'get_users':
                    $role = Role::findOrFail($request->role_id);
                    $users = $role->users()->get([
                        'id', 'email', 'firstname', 'lastname',
                    ])
                        ->toArray();

                    return $this->sendResponse($users, 'OK.');
                    break;

                default:
                    # code...
                    break;
            }
        }

        $search_query = $request->searchTerm;
        $perPage = $request->per_page;
        $dataset = Role::select([
            'id', 'name', 'guard_name', 'created_at', 'updated_at',
        ])
            ->where(function ($query) use ($search_query) {
                if ($search_query) {
                    $query->orWhere('name', 'LIKE', '%' . $search_query . '%');
                }
            })
            ->paginate($perPage)
            ->toArray();

        if ($search_query) {
            $dataset['searchTerm'] = $search_query ?: '';
        } else {
            $dataset['searchTerm'] = $search_query ? null : '';
        }

        return response()->json($dataset);

        $roles = Role::select(['id', 'name'])->get()->toArray();

        return $this->sendResponse($roles, 'OK.');

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
        $role = Role::create($input);

        return $this->sendResponse([], 'OK.');

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
        $role = Role::findOrFail($id);
        $role->name = $request->name;
        $role->save();

        return $this->sendResponse([], 'Role updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::findOrFail($id);
        $role->delete();

        return $this->sendResponse([], 'Role deleted successfully.');
    }
}
