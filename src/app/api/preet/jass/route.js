import { NextResponse } from "next/server";

export async function GET(){

    const data = "jass";

    console.log(data)

    // res.json(data);
    
    // const posts = await fetch('/api/preet')

    // res.send(NextResponse.json({data}))

    // console.log(posts)

    return NextResponse.json({result: data})
}