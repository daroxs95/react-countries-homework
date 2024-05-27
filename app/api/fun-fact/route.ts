import { NextRequest, NextResponse } from 'next/server';
import {FACTS_API_URL} from "@/config";

export async function GET(request: NextRequest) {
    const fact = await fetch(`${FACTS_API_URL}/random`);
    const data = await fact.json();
    return NextResponse.json(data);
}