import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) => u.username === username && u.password === password
        );
    
        if (user) {
            localStorage.setItem("LoggedInUser", JSON.stringify(user));
            alert("Login Success!");
            navigate("/mainBoard");
        } else {
            alert("Username/Password salah!");
        }
    };
    

    return(
        <div className="fixed inset-0 flex justify-center items-center bg-slate-400">
            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-md w-[350px]">
                <h1>Log In</h1>
                <form 
                onSubmit={handleLogin}
                className="flex flex-col w-full items-center"
                action="">
                    <input type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <button
                    type="submit"
                    className="w-[100px] mt-4 px-4 py-2 text-white bg-slate-500 text-center rounded-lg transition hover:bg-slate-700"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}