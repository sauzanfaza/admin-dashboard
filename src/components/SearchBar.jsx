import { FaSearch } from "react-icons/fa";
import { useSearch } from "../../SearchContext";

export default function SearchBar() {
    const { setKeyword} = useSearch()
    
    return(
        <>
        {/* search bar */}
            <div class="flex w-68">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                    className="flex-1 border border-sky-800 rounded-l-full pl-4 py-1 focus:outline-none"
                />
                <button
                    className="bg-gray-300 border border-l-0 border-sky-800 rounded-r-full px-4 flex items-center justify-center hover:text-sky-800"
                >
                    <FaSearch/>
                </button>
            </div>
        </>
    )
}