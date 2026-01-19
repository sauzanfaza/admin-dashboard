import Overview from "./Overview";
import Chart from "./Chart"
import RecentOrder from "./RecentOrder";
import TopSales from "./TopSales";

export default function Dashboard() {
    return(
        <div className="min-h-screen w-full bg-[#6D94C5] p-4">
            <Overview />
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <RecentOrder />
                    <Chart />
                </div>
                <div>
                    <TopSales />
                </div>
            </div>
        </div>
    )
}