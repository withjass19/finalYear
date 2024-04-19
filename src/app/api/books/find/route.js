import {  Book } from "@/database/models/bookschema"
import mongoose from "mongoose";
import connectDB from "@/database/config/db";
import { User } from "@/database/models/userSchema";
import { Upload } from '@/database/models/uploadSchema';
import { NextResponse } from "next/server";

// async function connectDB(){
//     const connect = await mongoose.connect('mongodb://localhost:27017/semple');

//     if(!connect){
//         console.log("Not Connect DB")
//     }
//     else{
//         console.log("Connect DB");
//     }
// }

export async function POST(req){
  connectDB()
    const { id } = await req.json();

    // const id = '65d4961788d80b97480f90e7'
    const data = await Book.findOne({_id: id});
    
    const user = await User.findOne({_id: data.UId})

    const user_Img = await Upload.findOne({ UId: data.UId })

    if(!user_Img){
      return NextResponse.json({result: data, user_info: user, success: false,  url: 'http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png'});
    }
    
    // console.log(data);
    
    return NextResponse.json({result: data, user_info: user, url: user_Img.url});
}