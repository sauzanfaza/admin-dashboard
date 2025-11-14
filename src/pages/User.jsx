import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { users } from "../data/data"
import { useState } from "react"
import { useSearch } from "../../SearchContext"
import { useMemo } from "react"

export default function User() {
    const [selectedStatus, setSelectedStatus] = useState("All Status")
    const {keyword} = useSearch()

    const filterUser = useMemo(() => {
        return users.filter((user) => {
            const lowerKeyword = keyword.toLowerCase()
            const matchKeyword = keyword ?
                user.username.toLowerCase().includes(lowerKeyword) ||
                user.email.toLowerCase().includes(lowerKeyword) ||
                user.date.toLowerCase().includes(lowerKeyword) ||
                user.status.toLowerCase().includes(lowerKeyword)
                : true

            const matchStatus = selectedStatus === "All Status" 
                ? true
                : user.status.toLowerCase() === selectedStatus.toLowerCase()

            return matchKeyword && matchStatus
        })
    }, [keyword, selectedStatus])

    return(
        <>
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100">
                <Navbar title = "Users" />
                <div className="grid grid-cols-2 bg-white px-8 py-4">
                <div className="grid grid-cols-4 items-start">
                {["All Status", "Active", "Deactive", "Delete"].map((status) => (
                        <button 
                            key={status}
                            onClick={() => setSelectedStatus(status)}
                            className={`px-4 py-2font-medium transition ${
                            selectedStatus === status
                            ? " font-bold underline"
                            : "hover:text-[#6D94C5]"
                            }`}>
                            {status}
                        </button>
                ))}
                </div>
                </div>
                    <div className="grid grid-cols-4 items-center shadow-md rounded-lg px-4 py-2 m-10 bg-slate-200">
                        <div className="text-center">Username</div>
                        <div className="text-center">Email</div>
                        <div className="text-center">Date-Join</div>
                        <div className="text-center">Status</div>
                    </div>

                    {filterUser.map((user) => (
                        <div key={user.id} className="grid grid-cols-4 bg-white shadow-lg rounded-lg mt-4 m-10 py-2 hover:bg-slate-300">
                            <div className="text-center">{user.username}</div>
                            <div className="text-center">{user.email}</div>
                            <div className="text-center">{user.date}</div>
                            <div className={`text-center 
                                ${user.status.toLowerCase() === "active" 
                                    ? "text-green-700"
                                    : user.status.toLowerCase() === "deactive" 
                                    ? "text-yellow-700"
                                    : "text-red-700"
                                }`}
                                >{user.status}</div>
                        </div>
                    ))}
            </main>
        </div>
        </>
    )
}