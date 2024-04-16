import connectDB from "@/database/config/db";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
const CryptoJS = require('crypto-js');

export async function POST(req, res){
    connectDB()

    const {username, email, phoneNumber, password} = await req.json();

    const hashedPassword = CryptoJS.AES.encrypt(password, 'key').toString();

    const data = new User({
        username, 
        email, 
        phoneNumber, 
        password: hashedPassword,
    });
    const result = await data.save()
    // console.log(data);

    return NextResponse.json({success: true})
} 