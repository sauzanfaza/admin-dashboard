export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Dashboard</h1>
        <nav className="space-y-4">
            <a href="#" className="block hover:text-gray-300">Dashboard</a>
            <a href="#" className="block hover:text-gray-300">Products</a>
            <a href="#" className="block hover:text-gray-300">Users</a>
            <a href="#" className="block hover:text-gray-300">Orders</a>
        </nav>
        </aside>
    );
}
