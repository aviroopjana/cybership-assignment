import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const customers = await prisma.customer.findMany();
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch customers" }, { status: 500 });
  }
}
