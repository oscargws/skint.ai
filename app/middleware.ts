import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes
const protectedRoutes = ["/protected"]; // Add more routes as needed

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Initialize Supabase client
  const supabase = await createClient();

  console.log("Middleware executed:", req.nextUrl.pathname);

  // Get the user session
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect to sign-in if user is not authenticated and trying to access a protected route
  if (
    !user &&
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return res;
}

// Apply middleware to all routes
export const config = {
  matcher: ["/protected/:path*"], // Adjust as needed
};
