import mongoose from "mongoose";

export default async function connectDB(){
    // const URL = "mongodb+srv://jaspreetmehra185:RTN5jFawUs5f0h4v@cluster0.0do45ze.mongodb.net/jass?retryWrites=true&w=majority&appName=Cluster0"
    // const connect = await mongoose.connect(URL);
    const connect = await mongoose.connect("mongodb://localhost:27017/semple");
    if (!connect) {
        console.log("Not Connected DB")
    }
    else{
        console.log("Connected DB");
    }
}

// RTN5jFawUs5f0h4v - admin
// jaspreetmehra185