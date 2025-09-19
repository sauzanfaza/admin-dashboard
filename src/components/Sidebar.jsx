import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";

export default function Sidebar() {
    return (
        <aside className="w-40 h-screen bg-gray-800 text-white p-4 flex flex-col">
            {/* Profile Section */}
            <div className="grid place-items-center mb-2 p-4">
                <img
                    src="./img/profile.jpeg"
                    alt="profile"
                    className="w-16 h-16 max-w-none rounded-full object-cover object-center block"
                    style={{ aspectRatio: "1 / 1" }}
                />
                <h3 className="text-sm pt-1 text-center">Sauzan Faza</h3>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center w-full">
                <div className="w-full max-w-[150px] text-left space-y-2">
                    <a href="#" className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-sm">
                        <LuLayoutDashboard /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-sm">
                        <FaShoppingCart /> Product
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-sm">
                        <FaUser /> Users
                    </a>
                    <a href="#" className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-sm">
                        <BsStack /> Orders
                    </a>
                </div>
            </nav>

            {/* Logout Button - stays at bottom */}
            <div className="mt-auto border-gray-700 pt-4">
                <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-red-800 hover:text-white transition">
                    <IoMdLogOut /> Logout
                </button>
            </div>
        </aside>
    );
}
