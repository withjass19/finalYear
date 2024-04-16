import connectDB from "@/database/config/db";
import {  Book } from "@/database/models/bookschema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
  connectDB()
  const data = await Book.find();
  // return new NextResponse(JSON.stringify(data), {


  // console.log(data);
  return NextResponse.json({result: data, success: 200});
}