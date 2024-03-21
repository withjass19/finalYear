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
        const current_password =  data.get("current_password");
        const new_password =  data.get("new_password");

        const new_hashedPassword = CryptoJS.AES.encrypt(new_password, 'key').toString();

        const decoded = jwt.verify(token, 'jwtSecret');

        const user = await User.findOne({ _id: decoded.user });

        let bytes  = CryptoJS.AES.decrypt(user.password, 'key');
        let current_hashedPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (current_password !== current_hashedPassword) {
            console.log('Current password is incorrect');
            return new NextResponse.json({"message": "Method Not Allowed", success: false});
        }

        await User.updateOne(
            { _id: decoded.user },
            { $set: { password: new_hashedPassword } }
        );

        return NextResponse.json({"message": "Password updated successfully", success: true});
        
    } catch (error) {
        return NextResponse.json({"message": "Method Not Allowed", success: false});
    }
}