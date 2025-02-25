// import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

// export function middleware(request){
//     // console.log(request)
//     console.log('hello world');
    
//     return NextResponse.redirect(new URL('/about' , request.url))

// }

export const middleware = auth;

export const config={
    matcher :['/account']
}