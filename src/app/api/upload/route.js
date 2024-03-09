import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import {writeFile} from 'fs/promises'
import { NextResponse } from "next/server";

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
    const path = `./public/temp/${file.name}`;
    await writeFile(path,buffer)
    
    return NextResponse.json({"message": "upload", success: true});
}
