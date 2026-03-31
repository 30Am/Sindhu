import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const basicAuth = req.headers.get("authorization");

    // Check for HTTP Basic Auth headers
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      const adminUser = process.env.ADMIN_USERNAME || "admin";
      const adminPwd = process.env.ADMIN_PASSWORD;

      if (!adminPwd) {
        // Fallback default password if the user forgets to set it in .env.local
        if (user === adminUser && pwd === "secret") {
          return NextResponse.next();
        }
      } else if (user === adminUser && pwd === adminPwd) {
        return NextResponse.next();
      }
    }

    // Prompt the browser's native login popup if auth is missing or invalid
    return new NextResponse("Auth required", {
      status: 401,
      headers: {
        "WWW-Authenticate": `Basic realm="Secure Admin Area"`,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
