import { User } from "@/database/models/jassModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
var bcrypt = require('bcryptjs');

async function connectDB(){
    const connect = await mongoose.connect('mongodb://localhost:27017/semple');

    if(!connect){
        console.log("Not Connect DB")
    }
    else{
        console.log("Connect DB");
    }
}

// export async function GET(){
//     connectDB()

//     return NextResponse.json({result: "Hello"})
// }

export async function POST(req, res){
  connectDB()

    let {email, password} = await req.json();    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

   const user = await User.find({email});

   if(!user){
    console.log("user not exist")
   }
   else{
    console.log("user Exist");
   }

    const data = new User({
        email,
        password: hashedPassword
    });
    
    await data.save()
    console.log(data);

    const sessionData = req.session.set('user', data);
    await req.session.save()

    console.log(sessionData);
    
// }
    return NextResponse.json({result: data});
}