import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const url = request.nextUrl.clone()
    const rawUrl = request.url

    // Check for double slashes in the path portion of the raw URL
    // This catches cases where the parsed pathname might be normalized
    const urlObj = new URL(rawUrl)
    const pathWithSearch = rawUrl.substring(urlObj.origin.length)

    // Detect multiple consecutive slashes in the path (after the origin)
    if (/\/{2,}/.test(pathWithSearch)) {
        // Normalize multiple slashes to single slash
        const normalizedPath = pathWithSearch.replace(/\/+/g, '/')
        url.pathname = normalizedPath.split('?')[0] || '/'
        url.search = normalizedPath.includes('?') ? normalizedPath.substring(normalizedPath.indexOf('?')) : ''
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
