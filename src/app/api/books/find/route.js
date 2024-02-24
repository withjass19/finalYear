import {  Bookx } from "@/database/models/bookschema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function connectDB(){
    const connect = await mongoose.connect('mongodb://localhost:27017/semple');

    if(!connect){
        console.log("Not Connect DB")
    }
    else{
        console.log("Connect DB");
    }
}

export async function POST(req){
  connectDB()
    const { id } = await req.json();

    // const id = '65d4961788d80b97480f90e7'
    const data = await Bookx.findOne({_id: id});
    
    console.log(data);
    

    return NextResponse.json({result: data});
}