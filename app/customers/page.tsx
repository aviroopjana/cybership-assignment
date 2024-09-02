import { DataTable } from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { columns, Customers } from "./columns";

async function getCustomers(): Promise<Customers[]> {
    const res = await fetch("http://localhost:3000/api/customers", { cache: "no-store" });
    const data = await res.json();
    return data;
  }
  

export default async function page() {
  const data = await getCustomers();

  return (
    <div className="p-6">
      <AnalyticsCard
        title="Customers"
        subTitle="Showing all customers with orders"
      >
        <Button className="mb-3">Add New Customer</Button>
        <DataTable columns={columns} data={data} />
      </AnalyticsCard>
    </div>
  );
}
