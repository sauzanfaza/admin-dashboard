import { dashboardStats } from "../data/data";

export default function Dashboard() {
    return (
    <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded-xl">
            <p>Total Users</p>
            <h2 className="text-xl font-bold">{dashboardStats.totalUsers}</h2>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
            <p>Total Products</p>
            <h2 className="text-xl font-bold">{dashboardStats.totalProducts}</h2>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
            <p>Total Revenue</p>
            <h2 className="text-xl font-bold">Rp {dashboardStats.totalRevenue}</h2>
        </div>
        </div>
    </div>
    );
}
