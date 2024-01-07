import { NextResponse } from "next/server";
import { permissionList } from "./config/permission";

const userPermission = ['USER__VIEW', 'DASHBOARD', 'USER__CREATE']

export default function middleware(req) {
   const currentPathname = req.nextUrl.pathname
   if (!userPermission.includes(permissionList[currentPathname])) {
      return NextResponse.redirect(new URL('/unautorize', req.url))
   }
   return NextResponse.next()
}

export const config = {
   matcher: ['/home', '/user', '/user/create']
};