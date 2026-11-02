import { NextResponse } from "next/server";

// Keep old contact links usable and preserve ad-click/query parameters.
export function GET(request) {
  const destination = new URL(request.url);
  destination.pathname = "/";
  destination.hash = "contact";
  return NextResponse.redirect(destination, 308);
}
