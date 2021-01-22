<?php

namespace App\Http\Controllers;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function create(){

            $order = Order::create([
                'amount' => 1,
            ]);
            return $order;
    }
    //
}
