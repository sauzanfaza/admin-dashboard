import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({user, setUser}) {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("LoggedInUser")
        alert("Berhasil Logout:))")
        navigate("/")
    }

    function handleToogle() {
        setIsOpen(prev => !prev)
    }

    return (
        <>
        <aside className="w-60 min-h-screen bg-gray-800 text-white p-4 hidden lg:flex flex-col">
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
                    <Link to="/user-page"
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <FaUser /> Users
                
                    </Link>
                    <Link to="/products"
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <BsStack /> Products
                    </Link>
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

        {/* mobile button */}
        </aside>
        
        <div className="lg:hidden top-0 left-0 right-0 h-14 bg-gray-800 flex items-center px-4 z-50">
        <button
            onClick={handleToogle}
            className="text-2xl text-white"
        >
            ☰
        </button>
    </div>


     
         {/* mobile menu */}
        {isOpen && (
            <div className="lg:hidden fixed flex inset-0 z-40">
                    <aside className="bg-gray-800 text-white p-4 mt-14">
                    <Link to="/mainBoard"
                    onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <LuLayoutDashboard /> Dashboard
                    </Link>
                    <Link to="/orders"
                    onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <FaShoppingCart /> Orders
                    </Link>
                    <Link to="/user-page"
                    onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <FaUser /> Users
                
                    </Link>
                    <Link to="/products"
                    onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 hover:bg-sky-600 px-4 py-2 rounded-lg text-[20px]">
                        <BsStack /> Products
                    </Link>
                    </aside>
                </div>
)}
    </>
    );
}
