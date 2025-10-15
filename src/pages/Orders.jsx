import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { recentOrders } from "../data/data"

export default function Orders() {
    return (
        <>
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100">
                <Navbar title="Orders"/>
                <div className="bg-[#6D94C5] min-h-screen p-4">
                     {/*kategories*/}
                     <div className="grid grid-cols-5 bg-slate-200 rounded-lg">
                        <div className="p-2 text-center">Order ID</div>
                        <div className="p-2 text-center">Customer Name</div>
                        <div className="p-2 text-center">Address</div>
                        <div className="p-2 text-center">Date</div>
                        <div className="p-2 text-center">Status</div>
                     </div>
                    {recentOrders.map((order) => (
                        <div key={order.id} className="grid grid-cols-5 bg-white rounded-lg mt-4 py-2 shaodw-md">
                            <div className="p-2 text-center">{order.id}</div>
                            <div className="p-2 text-center">{order.customer}</div>
                            <div className="p-2 text-center">{order.address}</div>
                            <div className="p-2 text-center">{new Date(order.date).toLocaleDateString()}</div>
                            <div className={`p-2 text-center font-semibold ${
                                order.status === "Paid"
                                ? "text-green-600"
                                : order.status === "Pending"
                                ? "text-yellow-600"
                                : "text-red-600"
                            }`}>{order.status}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
        </>
    )
}