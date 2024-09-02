import { DataTable } from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { columns, Orders } from "./columns";

async function getOrders(): Promise<Orders[]> {
  const res = await fetch("http://localhost:3000/api/orders", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function OrdersPage() {
  const data = await getOrders();

  return (
    <div className="p-6">
      <AnalyticsCard
        title="Orders"
        subTitle="Showing all orders"
      >
        <Button className="mb-3">Create New Order</Button>
        <DataTable columns={columns} data={data} />
      </AnalyticsCard>
    </div>
  );
}
