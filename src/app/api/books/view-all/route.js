import {  Book } from "@/database/models/bookschema";
import mongoose from "mongoose";
import connectDB from "@/database/config/db";
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
    // const data = await Bookx.find();
    const totalDocuments = await Book.countDocuments();
    
    const allDocuments = await Book.find({}, '_id');

    const documentIds = allDocuments.map(doc => doc._id);

    // console.log('Total number of documents:', totalDocuments);
    // console.log('All document IDs:', documentIds);


    // console.log(totalDocuments);
    return NextResponse.json({result: totalDocuments, totalIDs: documentIds});
}