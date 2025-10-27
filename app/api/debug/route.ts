import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const hasEnv = !!process.env.DISCORD_WEBHOOK_URL;
  return NextResponse.json({
    envSet: hasEnv,
    webhook: hasEnv ? "Loaded ✅" : "Missing ❌",
  });
}