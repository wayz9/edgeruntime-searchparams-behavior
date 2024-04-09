import { NextRequest } from "next/server";

// export const runtime = "edge"; 2nd example with node runtime.

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const searchParamsObject = Object.fromEntries(searchParams);
  return Response.json(searchParamsObject);
}
