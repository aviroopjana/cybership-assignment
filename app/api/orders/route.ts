import { NextResponse } from "next/server";
import { format } from "date-fns";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        status: true,
        paymentStatus: true,
        fulfillment: true,
        supportTickets: true,
        Product: true,
      },
    });

    const formattedOrders = orders.map(order => ({
      ...order,
      shippedAt: order.shippedAt ? format(new Date(order.shippedAt), "MM/dd/yyyy") : null,
      deliveredAt: order.deliveredAt ? format(new Date(order.deliveredAt), "MM/dd/yyyy") : null,
      canceledAt: order.canceledAt ? format(new Date(order.canceledAt), "MM/dd/yyyy") : null,
      orderStatus: order.status?.status || "Unknown",
      paymentStatus: order.paymentStatus?.status || "Unknown",
    }));

    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({ error: "Error fetching orders" }, { status: 500 });
  }
}
