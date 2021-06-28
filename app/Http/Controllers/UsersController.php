<?php

namespace App\Http\Controllers;

use App\Models\SuscribeNewsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    /**
     * This function is used from register the end user to the newsletter.
     * @param string $request->email, with the email of the end user.
     * @return array with the response of the request.
     */
    public function saveEmail(Request $request)
    {
        $status = false;
        $result = null;
        DB::beginTransaction();
        try {
            $user = SuscribeNewsletter::where('email', $request->email)->first();
            if(isset($user->id)){
                $suscribe = new SuscribeNewsletter();
                $suscribe->email = $request->email;
                $suscribe->save();
            }else{
                return $this::response(false, array('type' => 'error', 'content' => 'Ya te encuentras registrado a nuestras promociones y lanzamientos.'), array());
            }

            $status = true;
            DB::commit();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
            DB::rollBack();
        }if($status){
            return $this::response(true, array('type' => 'success', 'content' => 'Bienvenido!, gracias por hacer parte de nuestras promociones y lanzamientos.'), $suscribe);
        }else{
            return $this::response(false, array('type' => 'error', 'content' => 'Lo siento!, ocurrio un problema al momento de registrarte a nuestras promociones y lanzamientos.'), $result);
        }
    }
}
