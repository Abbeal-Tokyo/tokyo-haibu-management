import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** swagger spec
 * @swagger
 * /api/ping/{param}:
 *   get:
 *     tags:
 *      - Ping
 *     description: Returns the value defined in path parameter
 *     parameters:
 *      - in: path
 *        name: param
 *        required: true
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
export function GET(
  request: NextRequest,
  context: { params: { param: string } },
): NextResponse {
  const pathVariable = context.params.param;
  return NextResponse.json({ response: pathVariable }, { status: 200 });
}
