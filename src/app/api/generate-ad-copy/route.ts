import {generateAdCopy, GenerateAdCopyInput} from '@/ai/flows/generate-ad-copy';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input: GenerateAdCopyInput = {
      customerReviews: body.customerReviews,
    };

    const result = await generateAdCopy(input);

    return NextResponse.json(result, {status: 200});
  } catch (error) {
    console.error('Error generating ad copy:', error);
    return NextResponse.json(
      {error: 'Failed to generate ad copy'},
      {status: 500}
    );
  }
}
