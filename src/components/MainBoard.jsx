import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import Dashboard from "./Dashboard";

export default function MainBoard() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100 min-h-screen">
                <Navbar />
                <Dashboard />
            </main>
        </div>
    )
}