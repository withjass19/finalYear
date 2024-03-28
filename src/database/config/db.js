import mongoose from "mongoose";

export default async function connectDB(){
    // const URL = "mongodb+srv://jaspreetmehra185:7IBEcz0loRKVDCzf@cluster0.tcd4j4t.mongodb.net/semple?retryWrites=true&w=majority&appName=Cluster0"
    // const connect = await mongoose.connect(URL, { useUnifiedTopology: true})
    // const connect = await mongoose.connect("mongodb://localhost:27017/semple")
    const connect = await mongoose.connect(process.env.MONGODB_URL)
    if (!connect) {
        console.log("Not Connected DB")
    }
    else{
        console.log("Connected DB");
    }
}

// 7IBEcz0loRKVDCzf - admin
// jaspreetmehra185