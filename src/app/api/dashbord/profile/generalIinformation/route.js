// change password route

import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import { User } from "@/database/models/userSchema";
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

export async function POST(req, res){
    connectDB()

    try {
        // -------- image fatch and upload local folder
        const data = await req.formData();
        const token = data.get('token')
        
        // console.log(token)

        const decoded = jwt.verify(token, 'jwtSecret');

        // console.log(decoded.user)

        const user = await User.findOne({ _id: decoded.user })

        if(!user){
            return new NextResponse.json({"message": "Method Not Allowed", success: false});
        }

        return NextResponse.json({"message": "Password updated successfully", success: true, user: { username: user.username, email: user.email, phoneNo: user.phoneNumber}});
        
    } catch (error) {
        return NextResponse.json({"message": "Method Not Allowed", success: false});
    }
}