import connectDB from "@/database/config/db";
import { User } from "@/database/models/userSchema";
import { NextResponse } from "next/server";
const fs = require('fs');
const bcrypt = require('bcryptjs');

export async function  POST(req, res){
    connectDB()

    const {email, password} = await req.json();

    // const user = await User.findOne({ email, password });
    // console.log(email);
    const salt = await bcrypt.genSalt(10);
    var hashedPassword = await bcrypt.hash(password, salt);

    console.log(hashedPassword)

    
    try{
        const user = await User.findOne({email})

        if(user){
            var storedHashedPassword = user.password
            console.log(storedHashedPassword)
        }
        bcrypt.compare(password, storedHashedPassword,
            async function (err, isMatch) {
                if (isMatch) {
                    console.log('Encrypted password is: ', password);
                    console.log('Decrypted password is: ', storedHashedPassword);

                    const dataToStore = { 
                        key: user.id,
                        name: user.username,
                        email: user.email,
                        phoneno: user.phoneNumber,
                    };

                    fs.writeFileSync('data.json', JSON.stringify(dataToStore));

                    const storedData = JSON.parse(fs.readFileSync('data.json'));
                    console.log('Stored data:', storedData);
                }
 
                if (!isMatch) {
 
                    // If password doesn't match the following
                    // message will be sent
                    console.log(hashedPassword + ' is not encryption of '
                        + password);
                }
            })
    }
    catch{
        console.log("error")
    }
    // if(await User.findOne({email})){
    //     const storedHashedPassword = userspassword
    //     console.log(storedHashedPassword);
    //     return NextResponse.json({success: true})
    // }
    // else{
    //     return NextResponse.json({success: false})
    // }

    return NextResponse.json({success: true})
    
    // return redirect("/books")
} 