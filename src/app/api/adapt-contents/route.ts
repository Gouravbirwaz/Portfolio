import { NextResponse } from 'next/server';
import { adaptContent, type AdaptContentInput } from '@/ai/flows/adapt-content';
import { portfolioData } from '@/lib/portfolio-data';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input: AdaptContentInput = {
      interests: body.interests,
      portfolio: portfolioData, // Use your server-side portfolioData here
    };

    const adapted = await adaptContent(input);

    return NextResponse.json(adapted);
  } catch (error) {
    console.error('API adapt-content error:', error);
    return NextResponse.json({ error: 'Failed to adapt content' }, { status: 500 });
  }
}
