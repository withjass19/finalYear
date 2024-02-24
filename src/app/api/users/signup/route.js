import connectDB from "@/database/config/db";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
const bcrypt = require('bcryptjs');

export async function  POST(req, res){
    connectDB()

    const {username, email, phoneNumber, password} = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = new User({
        username, 
        email, 
        phoneNumber, 
        password: hashedPassword,
    });
    const result = await data.save()
    console.log(data);

    return NextResponse.json({success: true})
} 