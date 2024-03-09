import connectDB from "@/database/config/db";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

export async function  POST(req, res){
    connectDB()
    const {email, password} = await req.json();
    console.log(email, password);
    let user = await  User.findOne({ email: email });
    if(user){

        let bytes  = CryptoJS.AES.decrypt(user.password, 'key');
        let hashedPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (email == user.email && password == hashedPassword) {
            let token = jwt.sign({ email: user.email, name: user.username}, 'jwtSecret', { expiresIn: 60 * 60 });
            return NextResponse.json({success: true, token, id: user._id});
        }else{
            return NextResponse.json({
                status: "error",
                code: 500,
                data: [],
                message: "Internal Server Error",
            });
        }
    }
    else{
        return NextResponse.json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
} 