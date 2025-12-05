import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { topSales } from "../data/data";
import { CiSquarePlus } from "react-icons/ci";
import { useSearch } from "../../SearchContext";
import { useMemo, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Products() {
    const { keyword } = useSearch();
    const [products, setProducts] = useState(topSales);

    // Modal
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    // Form untuk ADD & EDIT
    const [formData, setFormData] = useState({
        product: "",
        unitsSold: "",
        revenue: "",
    });

    // FILTER
    const filteredProduct = useMemo(() => {
        const lowerKeyword = keyword.toLowerCase();
        return products.filter((product) => {
            if (!keyword) return true;
            return (
                product.product.toLowerCase().includes(lowerKeyword) ||
                String(product.unitsSold).includes(lowerKeyword) ||
                String(product.revenue).includes(lowerKeyword)
            );
        });
    }, [keyword, products]);

    // OPEN ADD MODAL
    const openAddModal = () => {
        setIsEdit(false);
        setFormData({
            product: "",
            unitsSold: "",
            revenue: "",
        });
        setShowModal(true);
    };

    // ADD PRODUCT
    const handleAddProduct = () => {
        const lastId = products.length > 0 ? products[products.length - 1].id : 0;
        const newId = lastId + 1;

        if (!formData.product || !formData.unitsSold || !formData.revenue) {
            alert("Please fill all fields!!");
            return;
        }

        const newItemProduct = {
            id: newId,
            product: formData.product,
            unitsSold: formData.unitsSold,
            revenue: formData.revenue,
        };

        setProducts([...products, newItemProduct]);
        setShowModal(false);
    };

    // DELETE
    const deleteProduct = (id) => {
        const confirmDelete = window.confirm("Are you sure?");
        if (!confirmDelete) return;

        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
    };

    // OPEN EDIT MODAL
    const startEdit = (id) => {
        const item = products.find((p) => p.id === id);

        setIsEdit(true);
        setEditId(id);
        setFormData({
            product: item.product,
            unitsSold: item.unitsSold,
            revenue: item.revenue,
        });
        setShowModal(true);
    };

    // SAVE EDIT
    const saveEdit = () => {
        const updated = products.map((p) =>
            p.id === editId
                ? {
                      ...p,
                      product: formData.product,
                      unitsSold: formData.unitsSold,
                      revenue: formData.revenue,
                  }
                : p
        );

        setProducts(updated);
        setShowModal(false);
        setEditId(null);
        setIsEdit(false);
    };

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 bg-gray-100">
                    <Navbar title="Products" />

                    {/* MODAL ADD / EDIT */}
                    {showModal && (
                        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50">
                            <div className="bg-white p-6 rounded-2xl shadow-lg w-[400px]">
                                <div className="flex justify-between mb-4">
                                    <h2 className="text-lg font-semibold">
                                        {isEdit ? "Edit Product" : "Add Product"}
                                    </h2>
                                    <button
                                        className="text-xl font-bold hover:text-red-600 cursor-pointer"
                                        onClick={() => setShowModal(false)}
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* FORM */}
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="w-full p-2 mb-3 border rounded-md"
                                    value={formData.product}
                                    onChange={(e) =>
                                        setFormData({ ...formData, product: e.target.value })
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Units Sold"
                                    className="w-full p-2 mb-3 border rounded-md"
                                    value={formData.unitsSold}
                                    onChange={(e) =>
                                        setFormData({ ...formData, unitsSold: e.target.value })
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Revenue"
                                    className="w-full p-2 mb-4 border rounded-md"
                                    value={formData.revenue}
                                    onChange={(e) =>
                                        setFormData({ ...formData, revenue: e.target.value })
                                    }
                                />

                                {/* BUTTONS */}
                                <div className="flex justify-end space-x-2">
                                    <button
                                        className="px-4 py-2 bg-gray-300 rounded-md cursor-pointer"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>

                                    {isEdit ? (
                                        <button
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
                                            onClick={saveEdit}
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <button
                                            className="px-4 py-2 bg-green-500 text-white rounded-md cursor-pointer hover:bg-green-600"
                                            onClick={handleAddProduct}
                                        >
                                            Add
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* BUTTON ADD */}
                    <div className="grid grid-cols-2 bg-slate-200 shadow-md px-8 py-4 mx-4 my-4 rounded-2xl">
                        <div className="items-start">Add Product</div>
                        <div className="justify-self-end">
                            <button
                                className="text-2xl hover:scale-125 transition cursor-pointer"
                                onClick={openAddModal}
                            >
                                <CiSquarePlus />
                            </button>
                        </div>
                    </div>

                    {/* PRODUCT LIST */}
                    <div className="bg-gray-100 min-h-screen py-4 px-8 text-sm">
                        <div className="grid grid-cols-4 bg-white shadow-2xl rounded-lg">
                            <div className="p-2 text-center">Product</div>
                            <div className="p-2 text-center">Units Sold</div>
                            <div className="p-2 text-center">Revenue</div>
                            <div className="p-2 text-center">Action</div>
                        </div>

                        {filteredProduct.map((product) => (
                            <div
                                key={product.id}
                                className="grid grid-cols-4 bg-white border rounded-lg shadow-lg mt-4 hover:bg-gray-100"
                            >
                                <div className="p-2 text-center">{product.product}</div>
                                <div className="p-2 text-center">{product.unitsSold}</div>
                                <div className="p-2 text-center">{product.revenue}</div>

                                <div className="flex justify-center space-x-2 p-2">
                                    <button
                                        className="text-lg hover:text-green-700 cursor-pointer"
                                        onClick={() => startEdit(product.id)}
                                    >
                                        <BiEdit />
                                    </button>

                                    <button
                                        className="text-lg hover:text-red-600 cursor-pointer"
                                        onClick={() => deleteProduct(product.id)}
                                    >
                                        <RiDeleteBin5Line />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
