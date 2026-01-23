import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
// import { users } from "../data/data"
import { useState } from "react"
import { useSearch } from "../../SearchContext"
import { useMemo } from "react"
import SearchBar from "../components/SearchBar"
import { useEffect } from "react"
import { data } from "react-router-dom"

export default function User({user, setUser}) {
    const [userForm, setUserForm] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const {keyword} = useSearch()

    //useEffect untuk ambil data dari localStorage, [] itu untuk sekali 
    useEffect(() => {
        const dataUser = localStorage.getItem("users") //users itu var tempat simpen data di localstroage saat user regis (regis.jsx)
        if(dataUser) {
            setUserForm(JSON.parse(dataUser))
        }
    }, [])

    //useMemo untuk ngolah data
    const filterUser = useMemo(() => {
        return userForm.filter((user) => {
            const lowerKeyword = keyword.toLowerCase()
            const matchKeyword = keyword ?
                user.username.toLowerCase().includes(lowerKeyword) ||
                user.email.toLowerCase().includes(lowerKeyword) 
                : true //kalo gak match samakeyword yang dicari return semua data


            return matchKeyword 
        })
    }, [keyword, userForm])

    return(
        <>
        <div className="flex">
            <Sidebar user={user} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <main className="flex-1 bg-gray-100 text-[10px] md:text-lg">
                <Navbar title = "Users"
                    setIsOpen={setIsOpen}
                >
                    <SearchBar />
                </Navbar>
                <div className="grid md:grid-cols-2 text-[12px] md:text-lg bg-white md:px-8 px-4 py-4">
                {/* <div className="grid grid-cols-4 items-start lg:text-lg">
                {["All Status", "Active", "Deactive", "Delete"].map((status) => (
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
                </div> */}
                </div>
                    <div className="grid grid-cols-4 items-center text-[12px] md:text-lg font-bold shadow-md rounded-lg px-4 py-2 md:py-4 lg:py-6 m-10 bg-slate-200">
                        <div className="text-center">Username</div>
                        <div className="text-center">Email</div>
                        <div className="text-center">Date-Join</div>
                        <div className="text-center">Status</div>
                    </div>

                    {filterUser.map((user, index) => (
                        <div key={index} className="grid grid-cols-4 break-words bg-white text-[12px] md:text-lg shadow-lg rounded-lg mt-4 m-10 py-4 md:py-4 lg:py-6 hover:bg-slate-300">
                            <div className="text-center">{user.username}</div>
                            <div className="text-center">{user.email}</div>
                            {/* <div className="text-center">{user.date}</div>
                            <div className={`text-center 
                                ${user.status.toLowerCase() === "active" 
                                    ? "text-green-700"
                                    : user.status.toLowerCase() === "deactive" 
                                    ? "text-yellow-700"
                                    : "text-red-700"
                                }`}
                                >{user.status}</div> */}
                        </div>
                    ))}
            </main>
        </div>
        </>
    )
}