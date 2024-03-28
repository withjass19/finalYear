import connectDB from "@/database/config/db";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

export async function  POST(req, res){
    connectDB()

        const data = await req.formData();
        const token = data.get('token')

        const decoded = jwt.verify(token, 'jwtSecret');

        console.log(decoded.user)  

        const user = await User.findOne({ _id: decoded.user })

        if(!user){
            console.log("error")
            return NextResponse.json({"message": "Method Not Allowed", success: false, url: 'http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png'});
        }
        
        console.log(user._id)

    return NextResponse.json({success: true, userinfo: user})
} 