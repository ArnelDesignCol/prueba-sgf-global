<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * This variable contain value from reference if something has the active status.
     * @var integer.
     */
    public $activeStatus = 1;

    /**
     * This variable contain value from reference that city is bogotá.
     * @var integer.
     */
    public $bogotaCity = 1;

    /**
     * This function is used from format the response obtained of the request and send to the end user.
     * @param boolean $status, with the status of the request.
     * @param array $message, with the message that send to the end user.
     * @param array $data, with the data obtained of the request.
     * @return array with the responsse formatted.
     */
    static function response($status, $message = [], $data = [])
    {
        if($message['type'] == 'success'){
            $message = $message;
            $message['code'] = 200;
        } else if($message['type'] == 'error'){
            $message = $message;
            $message['code'] = 500;
        } else if($message['type'] == 'warning'){
            $message = $message;
            $message['code'] = 300;
        } else {
            abort(500);
        }

        return array('transaction' => array('status' => $status), 'message' => $message, 'data' => $data);
    }
}
