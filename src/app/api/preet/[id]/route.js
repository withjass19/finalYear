import { NextResponse } from "next/server";

export async function GET(req){
    const { dynamicParam } = req.query;
    const requestData = req.body; // Data sent from the first API

    // Process the data as needed
    console.log('Dynamic parameter:', dynamicParam);
    console.log('Data from first API:', requestData);

    return NextResponse.json({data: true})
}