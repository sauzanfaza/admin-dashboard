import { recentOrders } from "../data/data"

export default function RecentOrder() {
    return(
        <div className="p-4 bg-white rounded-md shadow-md mt-4 w-full">
            <h1 className="text-xl font-bold mb-3">Recent Orders</h1>
            <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="">
                    <th className="py-2 px-2 border-b border-gray-200 text-left text-[12px] font-semibold text-gray-700">Order ID</th>
                    <th className="py-2 px-2 border-b border-gray-200 text-left text-[12px] font-semibold text-gray-700">Customer</th>
                    <th className="py-2 px-2 border-b border-gray-200 text-left text-[12px] font-semibold text-gray-700">Date</th>
                    <th className="py-2 px-2 border-b border-gray-200 text-left text-[12px] font-semibold text-gray-700">Status</th>
                </tr>
                </thead>
                <tbody>
                {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                    <td className="py-2 px-2 border-b border-gray-200 text-[12px] text-gray-700">{order.id}</td>
                    <td className="py-2 px-2 border-b border-gray-200 text-[12px] text-gray-700">{order.customer}</td>
                    <td className="py-2 px-2 border-b border-gray-200 text-[12px] text-gray-700">{new Date(order.date).toLocaleDateString()}</td>
                    <td className={`py-2 px-2 border-b border-gray-200 text-[12px] font-semibold ${
                        order.status === "Paid"
                        ? "text-green-600"
                        : order.status === "Pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}>{order.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}