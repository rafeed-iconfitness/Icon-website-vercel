import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Normalize multiple consecutive slashes to a single slash
    // e.g., "//" -> "/", "///page" -> "/page"
    if (pathname !== '/' && pathname.includes('//')) {
        const normalizedPathname = pathname.replace(/\/+/g, '/')
        const url = request.nextUrl.clone()
        url.pathname = normalizedPathname
        return NextResponse.redirect(url, 301)
    }

    return NextResponse.next()
}

export const config = {
    // Match all paths except static files and API routes
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
    ],
}
