import mongoose from 'mongoose';
import {writeFile} from 'fs/promises'
import { NextResponse } from "next/server";

async function connectDB(){
    const connect = await mongoose.connect('mongodb://localhost:27017/semple');

    if(!connect){
        console.log("Not Connect DB")
    }
    else{
        console.log("Connect DB");
    }
}

export async function POST(req, res){
    connectDB()

    const data = await req.formData();
    const file = data.get('file')
    if(!file){
        return NextResponse.json({"message": "error", success: false})
    }
    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData);
    const filename =  file.name.replaceAll(" ", "_");
    console.log(filename);
    // const path = `./public/images/${file.name}`;
    // await writeFile(path,buffer)
    
    return NextResponse.json({"message": "upload", success: true});
}
