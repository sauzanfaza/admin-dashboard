import { LuLayoutDashboard } from "react-icons/lu"
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { BsStack } from "react-icons/bs"
import { IoMdLogOut } from "react-icons/io"
import { Link, useFetcher, useNavigate } from "react-router-dom"

export default function Sidebar({ user, isOpen, setIsOpen }) {
  const navigate = useNavigate()

  function handleLogout() {
    const users = JSON.parse(localStorage.getItem("users")) || [] //ambil semua users
    const isLogin = JSON.parse(localStorage.getItem("LoggedInUser")) //ambil user yang login
    if(isLogin) {
      const targetUser = users.find(
        (u) => u.username === isLogin.username //cari username yang sama kaya username yang login
      )

      if(targetUser) {
        targetUser.status = "inactive" //kalo user yang di target ketemu logout, balikin lagi status ke inactive
      }
    }
    
    localStorage.setItem("users", JSON.stringify(users)) //simpen data users yg baru ke users localstorage
    localStorage.removeItem("LoggedInUser") //dia udah gak login juga statusnya
    navigate("/")
  }

  const menuClass = "flex items-center gap-2 lg:gap-3 px-4 py-2 lg:py-4 rounded-lg hover:bg-sky-600 text:md md:text-lg lg:text-2xl"

  return (
    <>
      {/* DESKTOP SIDEBAR  */}
      <aside className="hidden lg:flex lg:w-64 h-screen bg-gray-800 text-white p-4 flex-col sticky top-0">
        <div className="grid place-items-center mb-14 mt-8">
          <img src="./img/profile.jpeg" alt="profile" className="w-16 h-16 rounded-full object-cover" />
          <h3 className="text-sm mt-2">{user?.name}</h3>
        </div>

        <nav className="space-y-2">
          <Link to="/mainBoard" className={menuClass}><LuLayoutDashboard /> Dashboard</Link>
          <Link to="/orders" className={menuClass}><FaShoppingCart /> Orders</Link>
          <Link to="/user-page" className={menuClass}><FaUser /> Users</Link>
          <Link to="/products" className={menuClass}><BsStack /> Products</Link>
        </nav>

        <button onClick={handleLogout} className="mt-auto flex items-center lg:text-2xl gap-2 lg:gap-3 px-4 py-2 lg:py-6 rounded-lg hover:bg-red-800">
          <IoMdLogOut /> Logout
        </button>
      </aside>

      {/* MOBILE SIDEBAR (OVERLAY) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />

          {/* sidebar content */}
          <aside className="relative w-40 md:w-44 h-[100%] bg-gray-800 text-white p-4 flex flex-col shadow-xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-2 text-xl"
            >
              ✕
            </button>
            
            <div className="grid place-items-center mb-6 mt-8">
              <img src="./img/profile.jpeg" alt="profile" className="w-16 h-16 rounded-full object-cover" />
              <h3 className="text-sm mt-2">{user?.name}</h3>
            </div>

            <nav className="space-y-2">
              <Link to="/mainBoard" onClick={() => setIsOpen(false)} className={menuClass}><LuLayoutDashboard /> Dashboard</Link>
              <Link to="/orders" onClick={() => setIsOpen(false)} className={menuClass}><FaShoppingCart /> Orders</Link>
              <Link to="/user-page" onClick={() => setIsOpen(false)} className={menuClass}><FaUser /> Users</Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className={menuClass}><BsStack /> Products</Link>
            </nav>

            <button onClick={handleLogout} className="mt-auto flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-800">
              <IoMdLogOut /> Logout
            </button>
          </aside>
        </div>
      )}
    </>
  )
}