import Overview from "./Overview";
import Chart from "./Chart"

export default function Dashboard() {
    return(
        <div className="min-h-screen bg-[#6D94C5] p-4">
            <Overview />
            <Chart />
        </div>
    )
}