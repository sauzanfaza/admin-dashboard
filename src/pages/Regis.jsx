import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Regis() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if(password !== confirm) {
            alert("Password tidak sama!")
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        if(users.find((u) => u.username === username)) {
            alert("username telah dipakai!")
            return;
        }

        users.push({ username, email, password});
        localStorage.setItem("users", JSON.stringify(users))
        alert("Register berhasil!");
        navigate("/login");
    }

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-400">
            <div className="flex flex-col items-center gap-4 p-8 m-4 md:m-0 bg-white rounded-lg shadow-md w-[350px]">
                <h1>Sign Up</h1>
                <form 
                onSubmit={handleRegister}
                className="flex flex-col w-full items-center"
                action="">
                    <input type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="password" 
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="confirm password"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <button
                    type="submit"
                    className="w-[100px] mt-4 px-4 py-2 text-white bg-slate-500 text-center rounded-lg transition hover:bg-slate-700"
                    >
                        Sign Up
                    </button>
                    <p className="mt-4 text-center text-sm">
                        Already have an account?{' '}
                    <Link 
                        to="/login"
                        className="text-sm cursor-pointer hover:text-sky-600 underline"
                    >
                        Login
                    </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}