<?php

namespace App\Http\Controllers\v2;

use App\Http\Controllers\v2\BaseController as BaseController;
use App\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class AuthController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

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

        $user->assignRole('User');

        return $this->sendResponse([
            'displayName' => $user->firstname . ' ' . $user->lastname,
            'email' => $user->email,
            'expiresIn' => null,
            'accessToken' => $user->createToken('MyApp')->accessToken,
            'refreshToken' => null,
            'userId' => $user->id,
            'roles' => $user->getRoleNames(),
        ], 'ท่านได้ทำการลงทะเบียนใช้งานระบบเรียบร้อยแล้ว.');
    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            return $this->sendResponse([
                'displayName' => $user->firstname . ' ' . $user->lastname,
                'email' => $user->email,
                'expiresIn' => null,
                'accessToken' => $user->createToken('MyApp')->accessToken,
                'refreshToken' => null,
                'userId' => $user->id,
                'roles' => $user->getRoleNames(),
            ], 'ยินดีต้อนรับ.');
        } else {
            return $this->sendError('E-mail หรือ Password ไม่ถูกต้อง! กรุณาตรวจสอบอีกครั้ง!', ['error' => 'Unauthorised']);
        }
    }

}
