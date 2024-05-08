import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(request: NextRequest): NextResponse {
  const response = request.nextUrl.searchParams.get("pong") ?? "pong";
  return NextResponse.json({ response }, { status: 200 });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const response = body.pong ?? 'No "pong" value provided in the request body';
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Error while parsing JSON [${error}]` },
      { status: 400 },
    );
  }
}
