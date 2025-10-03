import Sidebar from "./Sidebar";
import Navbar from "./Navbar"
import Dashboard from "./Dashboard";

export default function MainBoard({user, setUser}) {
    return (
        <div className="flex">
            <Sidebar user={user} setUser={setUser}/>
            <main className="flex-1 bg-gray-100 min-h-screen">
                <Navbar user={user}/>
                <Dashboard />
            </main>
        </div>
    )
}