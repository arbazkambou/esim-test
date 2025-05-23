import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const referralFromUrl = nextUrl.searchParams.get("referral");
  const existingReferral = cookies.get("referral")?.value;
  const response = NextResponse.next();

  if (referralFromUrl && referralFromUrl !== existingReferral) {
    response.cookies.set({
      name: "referral",
      value: referralFromUrl,
      maxAge: 24 * 60 * 60 * 1,
      path: "/",
    });

    return response;
  }

  if (nextUrl.pathname === "/sim-buy-thank-you/") {
    const isPurchase = cookies.get("isPurchase")?.value;

    if (isPurchase !== "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = { matcher: "/((?!(?:.*\\.|api(?:/|$))).*)" };
