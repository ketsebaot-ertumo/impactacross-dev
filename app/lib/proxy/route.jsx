import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const apiUrl = `${API_URL}${path}`;
  
  try {
    const response = await axios.get(apiUrl, {
      headers: {
          'Content-Type': 'application/json',
        // 'Authorization': `token ${process.env.NEXT_PUBLIC_ERP_NEXT_API_KEY}:${process.env.NEXT_PUBLIC_ERP_NEXT_API_SECRET}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response ? error.response.status : 500 }
    );
  }
}

