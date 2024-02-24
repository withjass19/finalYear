import { NextResponse } from "next/server";

export async function GET(res){

    const fetchdata = await fetch('/api/preet/jass');
    if(fetchdata.ok) {
        let data = await fetchdata.json();
        console.log(data);
    }
    
    return NextResponse.json({data: true})
}