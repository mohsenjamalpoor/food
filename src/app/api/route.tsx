import { NextResponse } from "next/server";
import { json } from "stream/consumers";

const data:any = [ {name:"mohsen", lastName:"jamal"},
    {name:"mohsen1", lastName:"jamali"} 
];

export async function GET(req:any) {
  
   return NextResponse.json({data});
}
export async function POST(req:any) {
    const body = await req.json();

   return NextResponse.json(`hi ${body.data.name}`);
}