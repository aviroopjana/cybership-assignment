import { Customers } from "@/components/dashboard/top-customers";
import { Customer } from "@prisma/client";

export async function fetchTopCustomers(): Promise<Customers[]> {
  const res = await fetch("http://localhost:3000/api/top-customers", {
    cache: "no-store",
  });
  const data = await res.json();

  const topCustomers = data.map((customer: Customer) => ({
    id: customer.id,
    name: customer.name,
    totalSpend: customer.totalSpend,
    email: customer.email,
  }));

  return topCustomers;
}
