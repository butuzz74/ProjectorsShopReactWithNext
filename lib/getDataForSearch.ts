import { prisma } from "./prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // Выполняем запросы к нескольким таблицам одновременно
  const [projectors] = await Promise.all([
    prisma.projector.findMany({
      where: { model: { contains: query } },
      select: { id: true, model: true, },
      
    }),
    // prisma.screen.findMany({
    //   where: { model: { contains: query, mode: "insensitive" } },
    //   select: { id: true, model: true, type: "screen" },
    //   take: 5,
    // }),
    // prisma.accessory.findMany({
    //   where: { model: { contains: query, mode: "insensitive" } },
    //   select: { id: true, model: true, type: "accessory" },
    //   take: 5,
    // }),
  ]);

  // Объединяем результаты в один массив
  const results = [...projectors];

  return NextResponse.json({ results });
}
