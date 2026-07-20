import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/i18n/config";

const legacyPaths = new Set(["menu", "about", "contact", "privacy"]);

export function proxy(request: NextRequest) {
  const firstSegment = request.nextUrl.pathname.split("/").filter(Boolean)[0];

  if (!firstSegment || isLocale(firstSegment) || legacyPaths.has(firstSegment)) {
    return NextResponse.next();
  }

  const notFoundUrl = request.nextUrl.clone();
  notFoundUrl.pathname = "/zh/__not-found";

  return NextResponse.rewrite(notFoundUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|icon|robots\\.txt|sitemap\\.xml).*)",
  ],
};
