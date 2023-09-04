import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 3600;
export const fetchCache = 'force-cache';

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams;
  try {
    const result = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${queryParams.get('id')}`)).json();
    return NextResponse.json({ result, error: null });
  } catch (e) {
    return NextResponse.json({ result: null, error: e });
  }
}
