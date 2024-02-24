import mongoose from "mongoose";

export default async function connectDB(){
    const connect = await mongoose.connect("mongodb://localhost:27017/semple");
    if (!connect) {
        console.log("Not Connected DB")
    }
    else{
        console.log("Connected DB");
    }
}