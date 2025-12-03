import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { topSales } from "../data/data";
import { CiSquarePlus } from "react-icons/ci";


export default function Products() {
    return (
        <>
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100">
                <Navbar title="Products"/>
                <div className="grid grid-cols-2 bg-slate-200 shadow-md px-8 py-4 mx-4 my-4 rounded-2xl">
                    <div className="items-start">Add Product</div>
                    <div className="justify-self-end">
                        <button className="text-2xl transform transition duration-300 hover:scale-170"><CiSquarePlus /></button>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}