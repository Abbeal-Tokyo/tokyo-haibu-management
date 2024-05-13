import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** swagger spec
 * @swagger
 * tags:
 *  name: Ping
 *  description: Service health check
 */
/** swagger spec
 * @swagger
 * /api/ping/:
 *   get:
 *     tags:
 *      - Ping
 *     description: Returns the value defined in request parameter, or "pong" if not defined
 *     parameters:
 *      - in: query
 *        name: pong
 *        schema:
 *          type: string
 *        description: The value to be returned
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *               example: {"response": "pong"}
 */
export function GET(request: NextRequest): NextResponse {
  const response = request.nextUrl.searchParams.get("pong") ?? "pong";
  return NextResponse.json({ response }, { status: 200 });
}

/**
 * @swagger
 * /api/ping/:
 *   post:
 *     tags:
 *      - Ping
 *     description: Returns the value defined in body
 *     requestBody:
 *       description: The value to be returned
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pong:
 *                 type: string
 *           example: {"pong": "pong"}
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *               example: {"response": "pong"}
 *       400:
 *         description: Error while parsing JSON
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const response =
      body.pong ?? 'No "pong" value provided in the request body';
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Error while parsing JSON [${error}]` },
      { status: 400 },
    );
  }
}
