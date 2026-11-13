
import { connection } from "next/server";

export async function GET() {
  // Make this endpoint respond to each live request.
  await connection();

  return Response.json({
    status: "ok",
    time: new Date().toISOString(),
  });
}
