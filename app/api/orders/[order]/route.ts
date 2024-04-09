import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  // Return all searchParams as object;
  const searchParams = request.nextUrl.searchParams;

  const searchParamsObject = Object.fromEntries(searchParams);
  return new Response(JSON.stringify(searchParamsObject));
}
