import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { topSales } from "../data/data";
import { CiSquarePlus } from "react-icons/ci";
import { useSearch } from "../../SearchContext";
import { useMemo, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";


export default function Products() {
    const { keyword } = useSearch()
    const [products, setProducts] = useState(topSales)
    const [showModal, setShowModal] = useState(false)
    const [newProduct, setNewProduct] = useState({
        product: "",
        unitsSold: "",
        revenue: ""
    })

    const filteredProduct = useMemo(() => {
        return topSales.filter((product) => {
            const lowerKeyword = keyword.toLowerCase()
            const matchKeyword = keyword ?
            product.product.toLowerCase().includes(lowerKeyword) ||
            String(product.unitsSold).toLowerCase().includes(lowerKeyword)||
            String(product.revenue).toLowerCase().includes(lowerKeyword)
            : true

            return matchKeyword
        })
    }, [keyword])

    // add product
    const handleAddProduct = () => {
        if(!newProduct.product || !newProduct.unitsSold || !newProduct.revenue) {
            alert("Please fill all fields!!")
            return
        }

        const newItemProduct = {
            id:Date.now(),
            product: newProduct.product,
            unitSold: newProduct.unitsSold,
            revenue: newProduct.revenue
        };

        setProducts([...products, newItemProduct])
        setShowModal(false)

        //reset kembali
        setNewProduct({
            product: "",
            unitsSold: "",
            revenue: ""
        })
    }
    
    return (
        <>
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-gray-100">
                <Navbar title="Products"/>
                {showModal && (
                    <div className="grid grid-cols-2 bg-slate-200 shadow-md px-8 py-4 mx-4 my-4 rounded-2xl">
                    <div className="items-start">Add Product</div>
                    <div className="justify-self-end">
                        <button className="text-2xl transform transition duration-300 hover:scale-170 cursor-pointer"
                            onClick={() => setShowModal(true)}
                        ><CiSquarePlus /></button>
                    </div>

                    <input type="text"
                        placeholder="Product Name"
                        className="w-full p-2 mb-2 border rounded-md"
                        value={newProduct.product}
                        onChange={(e) => setNewProduct({...newProduct, product: e.target.value})}
                    />
                    <input type="text"
                        placeholder="Units Sold"
                        className="w-full p-2 mb-2 border rounded-md"
                        value={newProduct.unitsSold}
                        onChange={(e) => setNewProduct({...newProduct, unitsSold: e.target.value})}
                    />
                    <input type="text"
                        placeholder="Revenue"
                        className="w-full p-2 mb-2 border rounded-md"
                        value={newProduct.revenue}
                        onChange={(e) => setNewProduct({...newProduct, revenue: e.target.value})}
                    />

                    <div className="flex justify-end space-x-2">
                        <button
                            className="px-4 py-2 bg-gray-300 rounded-md"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-md"
                            onClick={handleAddProduct}
                        >
                            Add
                        </button>
                    </div>
                </div>
                )}
                <div className="grid grid-cols-2 bg-slate-200 shadow-md px-8 py-4 mx-4 my-4 rounded-2xl">
                    <div className="items-start">Add Product</div>
                    <div className="justify-self-end">
                        <button className="text-2xl transform transition duration-300 hover:scale-170 cursor-pointer"><CiSquarePlus /></button>
                    </div>
                </div>

                <div className="bg-gray-100 min-h-screen py-4 px-8 text-sm">
                    {/*kategori head  */}
                    <div className="grid grid-cols-4 bg-white shadow-2xl rounded-lg">
                        <div className="p-2 text-center">Prodcut</div>
                        <div className="p-2 text-center">Unit Sold</div>
                        <div className="p-2 text-center">Revenue</div>
                        <div className="p-2 text-center">Action</div>
                    </div>
                {/* data list */}
                {filteredProduct.map((product) => (
                    <div key={product.id}
                        className="grid grid-cols-4 bg-white border rounded-lg shadow-lg mt-4 my-2 hover:bg-gray-100">
                            <div className="p-2 text-center">{product.product}</div>
                            <div className="p-2 text-center">{product.unitsSold}</div>
                            <div className="p-2 text-center">{product.revenue}</div>
                            <div className="flex justify-center space-x-2">
                                <button className="pr-2 text-lg hover:text-green-700 cursor-pointer"><BiEdit /></button>
                                <button className="pl-2 text-lg hover:text-red-600 cursor-pointer"><RiDeleteBin5Line /></button>
                            </div>
                        </div>
                ))}
                </div>
            </main>
        </div>
        </>
    )
}