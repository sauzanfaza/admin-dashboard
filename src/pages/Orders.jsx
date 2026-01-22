import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import { recentOrders } from "../data/data"
import { useState } from "react"
import { useSearch } from "../../SearchContext"
import { useMemo } from "react"

export default function Orders({ user, setUser}) {
    const [selectedStatus, setSelectedStatus] = useState("All Orders")
    const [isOpen, setIsOpen] = useState(false)
    const { keyword } = useSearch()

    const filteredOrders = useMemo(() => {
        return recentOrders.filter((order) => {
            const lowerKeyword = keyword.toLowerCase()
            const matchKeyword = keyword
                ? order.customer.toLowerCase().includes(lowerKeyword) ||
                 order.address.toLowerCase().includes(lowerKeyword) ||
                 order.id.toString().includes(lowerKeyword)
                : true //semua data cocok
            
            const matchStatus = selectedStatus === "All Orders"
            ? true //apakah semua data cocok?
            : order.status.toLowerCase() === selectedStatus.toLowerCase() //tampilkan sesuai filter status

            return matchKeyword && matchStatus
        })
    }, [keyword, selectedStatus])

    return (
        <>
        <div className="flex">
            <Sidebar user={user} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <main className="flex-1 bg-gray-100 text-[10px] md:text-lg">
                <Navbar title="Orders"
                    setIsOpen={setIsOpen}
                > 
                 <SearchBar  />    
                </Navbar >
                {/*filter kategories  */}
                <div className="grid md:grid-cols-2 bg-white px-4 py-4 md:px-8 md:py-4">
                <div className="grid grid-cols-4 items-start text-[12px] md:text-[14px] lg:text-lg xl:text-xl">
                {["All Orders", "Paid", "Pending", "Cancelled"].map((status) => (
                        <button 
                            key={status}
                            onClick={() => setSelectedStatus(status)}
                            className={`px-4 py-2 font-medium transition ${
                            selectedStatus === status
                            ? " font-bold underline"
                            : "hover:text-[#6D94C5]"
                            }`}>
                            {status}
                        </button>
                ))}
                </div>
                </div>
                
                <div className="bg-white min-h-screen py-4 px-4 md:px-8 text-[12px] lg:text-lg">
                     {/*kategories*/}
                     <div className="grid grid-cols-5 bg-slate-200 rounded-lg">
                        <div className="p-2 text-center">Order ID</div>
                        <div className="p-2 text-center">Customer Name</div>
                        <div className="p-2 text-center">Address</div>
                        <div className="p-2 text-center">Date</div>
                        <div className="p-2 text-center">Status</div>
                     </div>

                     {/* data list */}
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="grid grid-cols-5 bg-white border shadow-lg rounded-lg mt-4 py-2 hover:bg-[#6D94C5]">
                            <div className="p-2 text-center">{order.id}</div>
                            <div className="p-2 text-center">{order.customer}</div>
                            <div className="p-2 text-center">{order.address}</div>
                            <div className="p-2 text-center">{new Date(order.date).toLocaleDateString()}</div>
                            <div className={`p-2 text-center font-semibold ${
                                order.status === "Paid"
                                ? "text-green-800"
                                : order.status === "Pending"
                                ? "text-yellow-800"
                                : "text-red-600"
                            }`}>{order.status}</div>
                        </div>
                    ))}

                    {filteredOrders.length === 0 && (
                        <p className="text-center text-gray-400 mt-6">
                            tidak ada data yang cocok
                        </p>
                    )}
                </div>
            </main>
        </div>
        </>
    )
}