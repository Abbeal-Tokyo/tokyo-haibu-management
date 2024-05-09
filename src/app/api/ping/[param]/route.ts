import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  context: { params: { param: string } },
): NextResponse {
  const pathVariable = context.params.param;
  return NextResponse.json({ response: pathVariable }, { status: 200 });
}
