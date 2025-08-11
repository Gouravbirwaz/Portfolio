import { NextResponse } from "next/server";
import { adaptContent } from "@/ai/flows/adapt-content";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await adaptContent(body);
  return NextResponse.json(result);
}
