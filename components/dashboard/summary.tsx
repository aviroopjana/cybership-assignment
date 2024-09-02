"use client";
import { useEffect, useState } from "react";
import {
  Users,
  ArrowUp,
  ArrowDown,
  DollarSign,
  Package,
  Shirt,
  LucideIcon,
} from "lucide-react";
import AnalyticsCard from "./analytics-card";
import { fetchSummaryData } from "@/utils/fetchSummaryData";

interface SummaryCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  changeType,
}) => {
  return (
    <div className="p-6 rounded-md flex-auto dark:bg-tertiary bg-slate-100 border">
      <div className="flex items-center gap-5 justify-center max-md:justify-between">
        <div>
          <p>{title}</p>
          <h2 className="font-bold text-2xl">{value}</h2>
        </div>
        <div>
          <Icon
            className="bg-primary text-white p-3 rounded-full"
            size={50}
          />
        </div>
      </div>
      <div
        className={`flex gap-1 mt-2 md:justify-center
        ${changeType === "increase" ? "text-green-500" : "text-red-500"}
        `}
      >
        {changeType === "increase" ? (
          <ArrowUp size={20} />
        ) : (
          <ArrowDown size={20} />
        )}
        <span className="text-sm">{change}</span>
      </div>
    </div>
  );
};

const Summary = () => {
  const [summaryData, setSummaryData] = useState([
    {
      title: "Orders",
      value: "0",
      icon: Package,
      change: "+30% since last year",
      changeType: "increase",
    },
    {
      title: "Revenue",
      value: "$0",
      icon: DollarSign,
      change: "-80% since last year",
      changeType: "decrease",
    },
    {
      title: "Customers",
      value: "0",
      icon: Users,
      change: "+10% since last year",
      changeType: "increase",
    },
    {
      title: "Products",
      value: "0",
      icon: Shirt,
      change: "-11% since last year",
      changeType: "decrease",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSummaryData();
        setSummaryData([
          {
            title: "Orders",
            value: data.totalOrders.toString(),
            icon: Package,
            change: "+30% since last year",
            changeType: "increase",
          },
          {
            title: "Revenue",
            value: `$${data.totalRevenue}`,
            icon: DollarSign,
            change: "-80% since last year",
            changeType: "decrease",
          },
          {
            title: "Customers",
            value: data.totalCustomers.toString(),
            icon: Users,
            change: "+10% since last year",
            changeType: "increase",
          },
          {
            title: "Products",
            value: data.totalProducts.toString(),
            icon: Shirt,
            change: "-11% since last year",
            changeType: "decrease",
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch summary data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AnalyticsCard title="Summary" subTitle="2024 Year Summary">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-10 mb-3">
        {summaryData.map((data, index) => (
          <SummaryCard
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
            change={data.change}
            changeType={data.changeType}
          />
        ))}
      </div>
    </AnalyticsCard>
  );
};

export default Summary;
