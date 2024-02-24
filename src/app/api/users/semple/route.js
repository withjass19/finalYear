const { NextResponse} = require("next/server");
import { permanentRedirect } from 'next/navigation'

export async function GET(){
     permanentRedirect(`/profile`)
     return  NextResponse.json({result: "Hello"})
}
 