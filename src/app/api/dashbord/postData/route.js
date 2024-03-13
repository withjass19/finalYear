// /api/dashboard/postData
// shows the all post in the table form 

import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import { Bookx } from "@/database/models/bookschema";
const jwt = require('jsonwebtoken');

export async function POST(req, res){
    connectDB()

    // -------- image fatch and upload local folder
    const data = await req.formData();
    const token = data.get('token')

    console.log('Token:', token);
    const decoded = jwt.verify(token, 'jwtSecret');
    console.log(decoded.name, decoded.email, decoded.user)
    const user = await Bookx.find( {UId: decoded.user} ) ;
    if(user.length == 0){
        console.log("not find");
    }else{
        console.log("find: ", user.bookName);
    }
    
    return NextResponse.json({"message": user, success: true});
}