import { NextResponse } from "next/server";

const protectedRoutes = ["/settings"];

export default function middleware(req) {
   return NextResponse.next()
}

// export const config = {
//    matcher: ['/']
// };