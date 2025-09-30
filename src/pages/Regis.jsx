import { Link } from "react-router-dom"

export default function Regis() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-slate-400">
            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-md w-[350px]">
                <h1>Sign In</h1>
                <form 
                className="flex flex-col w-full items-center"
                action="">
                    <input type="username" 
                    placeholder="username"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="email" 
                    placeholder="email"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="password" 
                    placeholder="password"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <input type="password" 
                    placeholder="confirm password"
                    className="w-full h-10 p-2 mb-2 rounded-md shadow border focus:outline-slate-500"
                    />
                    <button
                    type="submit"
                    className="w-[100px] mt-4 px-4 py-2 text-white bg-slate-500 text-center rounded-lg transition hover:bg-slate-700"
                    >
                        Sign In
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