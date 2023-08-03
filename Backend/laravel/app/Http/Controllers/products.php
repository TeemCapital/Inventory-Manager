<?php

namespace App\Http\Controllers;
use App\Models\product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class products extends Controller
{
    public function create(Request $request){
        $validator=Validator::make($request->all(),[
            'name'=>'required',
            'price'=>'required',
            'company'=>'required',
            'quantity'=>'required',
        ]);
        if($validator->fails()){
            return response()->json(['message'=>$validator->errors()->all()],status:409);
        }
        $product = new product();
        $product->name=$request->name;
        $product->price=$request->price;
        $product->company=$request->company;
        $product->quantity=$request->quantity;
        $product->save();
        if($product->save()){
            return response()->json(['message'=>"Product Created"]);
        }
    }

    public function show(){
        $product= product::all();
        if($product){
            return response()->json([$product]);
        }
    }
}
