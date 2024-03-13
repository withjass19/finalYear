import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import os from 'os'
import { v4 as uuidv4 } from 'uuid';
import cloudinary from 'cloudinary';
import { Bookx } from "@/database/models/bookschema";
const jwt = require('jsonwebtoken');

// async function connectDB(){
//     const connect = await mongoose.connect('mongodb://localhost:27017/semple');

//     if(!connect){
//         console.log("Not Connect DB")
//     }
//     else{
//         console.log("Connect DB");
//     }
// }

cloudinary.config({ 
    cloud_name: 'dci10aqu3', 
    api_key: '141161387529431', 
    api_secret: 'GfjHJXjpPlucpZ_0IqqDjdGLhNI' 
});

export async function POST(req, res){
    connectDB()

    // -------- image fatch and upload local folder
    const data = await req.formData();
    const file = data.get('file');
    const BookName = data.get('bookName');
    const Discription = data.get('discription');
    const Author = data.get('author');
    const Addition = data.get('addition');
    const Subject = data.get('subject');
    const Condition = data.get('condition');
    const Isbn = data.get('isbn');
    const Language = data.get('language');
    const Binding = data.get('binding');
    const Category = data.get('category');
    const Original_price = data.get('original_price');
    const Selling_price = data.get('selling_price');
    const token = data.get('token')

    console.log('Token:', token);

    // console.log(file);
    
    // const BookName = data.get('bookName')
    // console.log(BookName);
    if(!file){
        return NextResponse.json({"message": "error", success: false})
    }

    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData);

    const filename =  file.name.replaceAll(" ", "_");
    console.log(filename);

    const name = uuidv4();
    const ext = file.type.split("/")[1]
    console.log({name, ext});

    const tempdir = os.tmpdir()
    const uploadDir = path.join(tempdir, `/${name}.${ext}`)
    console.log(uploadDir);
    fs.writeFile(uploadDir, buffer)
    

    // -----------------------------------

    // Upload to the cloud after saving the photo file to the temp folder
    try {

        const cloudinaryResponse = await cloudinary.v2.uploader.upload(uploadDir, { folder: 'js_upload' });
        console.log('Cloudinary URL:', cloudinaryResponse.url);

        const decoded = jwt.verify(token, 'jwtSecret');
        console.log(decoded.name, decoded.email, decoded.user)

        const data = new Bookx({
            url: cloudinaryResponse.url,
            bookName: BookName,
            description: Discription,
            author: Author,
            addition: Addition,
            subject: Subject,
            condition: Condition,
            ISBN: Isbn,
            type: Language,
            binding: Binding,
            category: Category,
            // UID - user-id
            UId: decoded.user,
            price: Original_price,
            selling_prince: Selling_price,
        });

         await data.save()
        
        console.log(data);
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
    }

    fs.unlink(uploadDir)
    
    return NextResponse.json({"message": "upload", success: true});
}



















// export async function POST(req, res){
//     connectDB()

//     const data = await req.formData();
//     const file = data.get('file')
//     const BookName = data.get('bookName')
//     console.log(BookName);
//     if(!file){
//         return NextResponse.json({"message": "error", success: false})
//     }
//     const byteData = await file.arrayBuffer()
//     const buffer = Buffer.from(byteData);
//     const filename =  file.name.replaceAll(" ", "_");
//     console.log(filename);
//     const path = `./public/temp/${file.name}`;
//     await writeFile(path,buffer)
    
//     return NextResponse.json({"message": "upload", success: true});
// }
