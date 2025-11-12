import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

export default function User() {
    return(
        <>
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100">
                <Navbar title = "Users" />
                    <div className="flex items-center justify-center p-10">
                        <table className="min-w-full border rounded-3xl border-collapse text-center">
                        <thead className="bg-gray-100 ">
                        <tr className="gap">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Date-Join</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                        </thead>
                        </table>
                    </div>
            </main>
        </div>
        </>
    )
}