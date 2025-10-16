import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar({user, setUser}) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("LoggedInUser")
        alert("Berhasil Logout:))")
        navigate("/")
    }

    return (
        <aside className="w-60 min-h-screen bg-gray-800 text-white p-4 flex flex-col">
            {/* Profile Section */}
            <div className="grid place-items-center mb-2 p-4">
                <img
                    src="./img/profile.jpeg"
                    alt="profile"
                    className="w-16 h-16 max-w-none rounded-full object-cover object-center block"
                    style={{ aspectRatio: "1 / 1" }}
                />
                <h3 className="text-sm pt-1 text-center">{user?.name}</h3>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center w-full">
                <div className="w-full max-w-[150px] text-left space-y-2">
                    <Link to="/mainBoard"
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <LuLayoutDashboard /> Dashboard
                    </Link>
                    <Link to="/orders"
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <FaShoppingCart /> Orders
                    </Link>
                    <a href="#" className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <FaUser /> Users
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <BsStack /> Products
                    </a>
                </div>
            </nav>

            {/* Logout Button*/}
            <div className="mt-auto text-center border-gray-700 pt-4">
                <button 
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition">
                    <IoMdLogOut /> Logout
                </button>
            </div>
        </aside>
    );
}
