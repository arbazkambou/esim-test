import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const referralFromUrl = nextUrl.searchParams.get("referral");
  const reqIdForConectia = nextUrl.searchParams.get("reqid");

  const existingReferral = cookies.get("referral")?.value;
  const existingReqIdForConectia = cookies.get("reqIdConectia")?.value;

  const response = NextResponse.next();

  if (referralFromUrl && referralFromUrl !== existingReferral) {
    response.cookies.set({
      name: "referral",
      value: referralFromUrl,
      maxAge: 24 * 60 * 60 * 1,
      path: "/",
    });
  }

  if (reqIdForConectia && reqIdForConectia !== existingReqIdForConectia) {
    response.cookies.set({
      name: "reqIdConectia",
      value: reqIdForConectia,
      maxAge: 24 * 60 * 60 * 1,
      path: "/",
    });
  }

  if (nextUrl.pathname === "/sim-buy-thank-you/") {
    const isPurchase = cookies.get("isPurchase")?.value;

    if (isPurchase !== "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/esim",
    "/esim/:path*",
    "/regional",
    "/regional/:path*",
    "/global",
    "/international-esim",
    "/sim-buy-thank-you",
    "/",
    "/:path*-esim",
  ],
};
