import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 3600;

export async function GET() {
  try {
    const result = await (await fetch(`https://jsonplaceholder.typicode.com/todos/1`)).json();
    return NextResponse.json({ result, error: null });
  } catch (e) {
    return NextResponse.json({ result: null, error: e });
  }
}
