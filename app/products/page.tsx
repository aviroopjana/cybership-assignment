import { DataTable } from "@/components/ui/data-table";
import AnalyticsCard from "@/components/dashboard/analytics-card";
import { Button } from "@/components/ui/button";
import { columns, Products } from "./columns";

async function getProducts(): Promise<Products[]> {
  const res = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
  const data = await res.json();
  return data;
}

export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <div className="p-6">
      <AnalyticsCard
        title="Products"
        subTitle="Showing all products"
      >
        <Button className="mb-3">Add New Product</Button>
        <DataTable columns={columns} data={data} />
      </AnalyticsCard>
    </div>
  );
}
