import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import Dashboard from "./Dashboard";

export default function MainBoard({user, setUser}) {
    return (
        <>
        <div className="grid grid-cols-2 gap-2">
            <Sidebar user={user} setUser={setUser}/>
            <Navbar user={user}/>
        </div>

            <main className="flex-1 bg-gray-100 min-h-screen">
                <Dashboard />
            </main>
        </>
    )
}