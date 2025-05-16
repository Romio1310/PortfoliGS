import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add specific CORS headers for Sanity requests
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, sanity-auth')

  return response
}

// Match all request paths
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}