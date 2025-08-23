import { NextRequest, NextResponse } from 'next/server';
import { adaptContent, AdaptContentInput } from '@/ai/flows/adapt-content';

export async function POST(req: NextRequest) {
  try {
    const body: AdaptContentInput = await req.json();
    const result = await adaptContent(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in adapt-content API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: 'Failed to adapt content.', details: errorMessage }, { status: 500 });
  }
}
