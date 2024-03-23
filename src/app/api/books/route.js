import connectDB from "@/database/config/db";
import {  Book } from "@/database/models/bookschema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

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
    const data = await Book.find();
    // return new NextResponse(JSON.stringify(data), {


    console.log(data);
    return NextResponse.json({result: data});
}