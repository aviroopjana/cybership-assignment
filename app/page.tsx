import { BarGraph } from "@/components/dashboard/bar-chart"
import { RadarGraph } from "@/components/dashboard/radar-chart"
import Summary from "@/components/dashboard/summary"

const HomePage = () => {
  return (
    <div className="p-4 grid gap-5">
      <Summary/>
      <div className="grid lg:grid-cols-2 gap-10">
        <BarGraph />
        <RadarGraph/>
      </div>
    </div>
  )
}

export default HomePage