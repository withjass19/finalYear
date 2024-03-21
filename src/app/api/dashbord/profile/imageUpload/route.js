// change password route

import mongoose from 'mongoose';
import connectDB from "@/database/config/db";
import { NextResponse } from "next/server";
import { User } from "@/database/models/userSchema";
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
import path from "path";
import fs from "fs/promises";
import os from 'os'
import { v4 as uuidv4 } from 'uuid';
import cloudinary from 'cloudinary';
import { Book } from "@/database/models/bookschema";
import { Upload } from '@/database/models/uploadSchema';

cloudinary.config({ 
    cloud_name: 'dci10aqu3', 
    api_key: '141161387529431', 
    api_secret: 'GfjHJXjpPlucpZ_0IqqDjdGLhNI' 
});

export async function POST(req, res){
    connectDB()

    try {
        // -------- image fatch and upload local folder
        const data = await req.formData();
        const token = data.get('token')
        const file = data.get('image')
        
        console.log(token)
        console.log(file)

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

        try {
            // const cloudinaryResponse = await cloudinary.v2.uploader.upload(uploadDir, { folder: 'user_profile_upload' });
            // console.log('Cloudinary URL:', cloudinaryResponse.url);

            const decoded = jwt.verify(token, 'jwtSecret');
            console.log(decoded.name, decoded.email, decoded.user)

            const user = await Upload.findOne({ UId: decoded.user })

            if(!user){
                const cloudinaryResponse = await cloudinary.v2.uploader.upload(uploadDir, { folder: 'user_profile_upload' });
            console.log('Cloudinary URL:', cloudinaryResponse.url);

                const data = new Upload({
                    UId: decoded.user,
                    url: cloudinaryResponse.url,
                })

                const result = await data.save();

                console.log(result);
            }else{
                const cloudinaryResponse = await cloudinary.v2.uploader.upload(uploadDir, { folder: 'user_profile_upload' });
                console.log('Cloudinary URL:', cloudinaryResponse.url);
                user.url = cloudinaryResponse.url;
                const data = await user.save();
                console.log("update:", data)
            }
        } catch (error) {
            console.error('Error uploading to Cloudinary:', error);
        }
        
        fs.unlink(uploadDir)

        return NextResponse.json({"message": "upload", success: true});
        
    } catch (error) {
        return NextResponse.json({"message": "Method Not Allowed", success: false});
    }
}