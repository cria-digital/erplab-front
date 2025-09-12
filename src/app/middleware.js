import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const cookiesStore = await cookies() // ✅
  const token = cookiesStore.get('token')?.value

  const protectedPaths = ['/units', '/orders', '/users']

  const pathname = request.nextUrl.pathname

  const isProtected = protectedPaths.some((path) => pathname.startsWith(path))

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/units/:path*', '/orders/:path*', '/users/:path*'],
}
