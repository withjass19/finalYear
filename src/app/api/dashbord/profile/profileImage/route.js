// change password route

import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import { Upload } from '@/database/models/uploadSchema';
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

export async function POST(req, res){
    connectDB()

    try {
        // -------- image fatch and upload local folder
        const data = await req.formData();
        const token = data.get('token')

        const decoded = jwt.verify(token, 'jwtSecret');

        console.log(decoded.user)  

        const user = await Upload.findOne({ UId: decoded.user })

        if(!user){
            console.log("error")
            return NextResponse.json({"message": "Method Not Allowed", success: false, url: 'http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png'});
        }
        
        console.log(user._id)

        return NextResponse.json({"message": "Password updated successfully", success: true, url: user.url});
        
    } catch (error) {
        return NextResponse.json({"message": "Method Not Allowed", success: false});
    }
}