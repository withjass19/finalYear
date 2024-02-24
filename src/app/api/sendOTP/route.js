const accountSid = "AC398d10fff994fc0edfe41d83ee943fc0";
const authToken = "1814a3bb7cfbee0f5e57c9b0d6abdab1";
const verifySid = "VA3c059dc02238e4dde6d8a8ca6a3b8cce";
const client = require("twilio")(accountSid, authToken);
import { OTPs } from "@/database/models/OTP";
import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

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
  connectDB();

  const {phoneNumber} = await req.json();

  let OTP = Math.floor(100000 + Math.random() * 900000);

  let OTPSting = OTP.toString()

  console.log(phoneNumber)

  const data = new OTPs({
    phoneNumber : phoneNumber,
    otp: OTPSting
  })

  await data.save()
  console.log(data);

  try{
    // send message to the user's phone number with verification code
    const twilioResponse = await client.verify.services(verifySid).verifications
                          .create({to: `+91${phoneNumber}`, channel: 'sms'},function(err,twilioRes) {
                            if (err) {  
                              return res.send(`Error: ${err}`); 
                            }    
                            console.log(`Message sent! ${twilioRes.sid}`);
                            
                            return res.send(`Message has been sent!`);
                        });
  }catch(e){
    console.error(e);
    return res.status(500).end();
  }
}