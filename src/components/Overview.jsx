import { dashboardStats } from "../data/data";
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function Overview() {
    return (
    <div className="p-4 lg:p-8 lg:my-4 bg-white rounded-md shadow-md">
        <h1 className="text-xl font-bold mb-3">Overview</h1>
        <div className="grid md:grid-cols-4 gap-4 mb-2">
            <div className="flex items-center gap-3 px-2 py-4 rounded-xl shadow-md border border-[#6D94C5]">
                <div className="flex justify-center items-center w-12 h-12 border border-[#6D94C5] rounded-md bg-[#A1EEBD]">
                <FaUser />
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">{dashboardStats.totalUsers}</h2>
                    <p className="text-[12px]">Total Users</p>
                </div>
            </div>
            <div className="flex items-center gap-3 px-2 py-4 rounded-xl shadow-md border border-[#6D94C5]">
                <div className="flex justify-center items-center w-12 h-12 border border-[#6D94C5] rounded-md bg-[#A1EEBD]">
                <BsStack />
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">{dashboardStats.totalProducts}</h2>
                    <p className="text-[12px]">Total Products</p>
                </div>
            </div>
            <div className="flex items-center gap-3 px-2 py-4 rounded-xl shadow-md border border-[#6D94C5]">
                <div className="flex justify-center items-center w-12 h-12 border border-[#6D94C5] rounded-md bg-[#A1EEBD]">
                <FaChartLine />
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">{dashboardStats.totalRevenue}</h2>
                    <p className="text-[12px]">Total Revenue</p>
                </div>
            </div>
            <div className="flex items-center gap-3 px-2 py-4 rounded-xl shadow-md border border-[#6D94C5]">
                <div className="flex justify-center items-center w-12 h-12 border border-[#6D94C5] rounded-md bg-[#A1EEBD]">
                <FaShoppingCart />
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">{dashboardStats.totalOrder}</h2>
                    <p className="text-[12px]">Total Orders</p>
                </div>
            </div>
        </div>
    </div>
    );
}
