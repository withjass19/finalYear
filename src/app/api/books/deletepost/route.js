import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import { Book } from "@/database/models/bookschema";
const jwt = require('jsonwebtoken');

export async function POST(req, res){
    connectDB()
    // const data = await req.json();
    // -------- image fatch and upload local folder
    const data = await req.formData();
    const book_id = data.get('bookid')
    console.log(book_id)
    const result = await Book.deleteOne({ _id: book_id });
    console.log(result)
    
    return NextResponse.json({"message": "user", success: true});
}