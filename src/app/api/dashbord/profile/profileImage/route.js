// change password route

import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import { Upload } from '@/database/models/uploadSchema';
import { User } from "@/database/models/userSchema";
// const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

export async function POST(req, res){
    connectDB()

    try {
        // -------- image fatch and upload local folder
        const data = await req.formData();
        const token = data.get('token')

        const decoded = jwt.verify(token, 'jwtSecret');

        console.log(decoded.user)  

        const user_Img = await Upload.findOne({ UId: decoded.user })

        const user_info = await User.findOne({_id : decoded.user})
        
        console.log(user_info.email);

        if(!user_Img){
            return NextResponse.json({"message": "Method Not Allowed", success: false, username: user_info.username, url: 'http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png'});
        }
        
        console.log(user_Img._id)

        return NextResponse.json({"message": "Password updated successfully", success: true, url: user_Img.url, userName: user_info.username});
        
    } catch (error) {
        return NextResponse.json({"message": "Method Not Allowed", success: false});
    }
}