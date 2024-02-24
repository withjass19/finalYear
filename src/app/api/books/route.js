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

export async function GET(){
  connectDB()

    // const data = new Bookx({
    //     bookName: "Zero to One",
    //     status: "books is available",
    //     author: "Peter Thiel",
    //     addition: "xyz",
    //     subject: "xyz",
    //     ISBN: 1234,
    //     type: "xyz",
    //     publisher: "xyz",
    //     description: "This book talks about the life of Peter Thiel who started PayPal with his friends",
    //     UId: "user007",
    //     price: "$5.99",
    // });

    // await data.save()
    const data = await Bookx.find();
    // return new NextResponse(JSON.stringify(data), {


    console.log(data);
    return NextResponse.json({result: data});
}