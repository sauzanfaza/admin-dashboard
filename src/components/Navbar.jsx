import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow p-4 flex items-center justify-between">
            <div className="flex items-center">
            <h2 className="text-lg font-semibold">Welcome Sauzan Faza!</h2>
            </div>
            <div class="flex w-80">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-1 border border-sky-800 rounded-l-full pl-4 py-2 focus:outline-none"
                />
                <button
                    className="bg-gray-300 border border-l-0 border-sky-800 rounded-r-full px-4 flex items-center justify-center hover:text-sky-800"
                >
                    <FaSearch/>
                </button>
            </div>
        </header>
    );
}
