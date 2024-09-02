"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "@/components/ui/data-table";

export type Orders = {
  id: string | number;
  orderId: string;
  totalAmount: number;
  shippedAt: string;
  deliveredAt: string;
  orderStatus: string;
  paymentStatus: string;
};

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ row }) => {
      const totalAmount = row.getValue("totalAmount") as number;
      return <>${totalAmount}</>;
    },
  },
  {
    accessorKey: "shippedAt",
    header: "Shipped At",
    cell: ({ row }) => {
      const shippedAt = row.getValue("shippedAt") as string;
      return <span>{shippedAt}</span>;
    },
  },
  {
    accessorKey: "deliveredAt",
    header: "Delivered At",
    cell: ({ row }) => {
      const deliveredAt = row.getValue("deliveredAt") as string;
      return <span>{deliveredAt}</span>;
    },
  },
  {
    accessorKey: "orderStatus",
    header: "Order Status",
    cell: ({ row }) => {
      const orderStatus = row.getValue("orderStatus") as string;
      return <span>{orderStatus}</span>;
    },
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => {
      const paymentStatus = row.getValue("paymentStatus") as string;
      return <span>{paymentStatus}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Order Details</DropdownMenuItem>
            <DropdownMenuItem>Delete Order</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default async function OrdersPage() {
  const res = await fetch("/api/orders", { cache: "no-store" });
  const orders = await res.json();

  return (
    <div className="p-6">
      <h1>Orders</h1>
      <DataTable columns={columns} data={orders} />
    </div>
  );
}
