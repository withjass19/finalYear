import { User } from "@/database/models/jassModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

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

    const data = new User({
        email,
        password: hashedPassword
    });
    await data.save()
            // const data = await Users.find();
    console.log(data);
    
    var token = jwt.sign({ foo: data }, 'shhhhh');
// }
    return NextResponse.json({token});
}