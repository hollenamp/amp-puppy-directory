import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers.get("host");

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // rewrite root application to `/home` folder
  if ( hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN && req.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL("/", req.url));
  }

  let slug = hostname!.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,'')

  // rewrite everything else to `/[domain]/[slug] dynamic route
  if ( hostname !== process.env.NEXT_PUBLIC_ROOT_DOMAIN && req.nextUrl.pathname === '/' && slug) {
    return NextResponse.rewrite(new URL(`/breeder/${slug}`, req.url));
  }
}