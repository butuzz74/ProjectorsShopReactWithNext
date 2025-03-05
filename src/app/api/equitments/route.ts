import { NextResponse } from 'next/server';
import clientPromise from '@/utils/mongodb';

export async function GET() {
  try {
    const client = await clientPromise; // Подключаемся к MongoDB
    if (client) {
      console.log('kkkkk');
    }
    // const db = client.db("shop"); // Заменить на имя базы данных
    // const equipments = await db.collection("test.projectors").find({}).toArray();

    // return NextResponse.json({ success: true, data: equipments });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
