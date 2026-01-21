export default function Navbar({user, title, setIsOpen, children}) {

    return (
        <nav className="w-full bg-white shadow md:p-4 lg:p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
            {/* button sidebar kita tampilkan di navbar bkn d sidebar ketika ukuran di bawah lg */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-2xl p-2"
            >
                ☰
            </button>
            <h2 className="text-lg font-semibold">
                {title ? `${title}` : `Welcome ${user ? user.name : ""}`}
            </h2>
            </div>

            {/* children untuk menampilkan searchbar di page tertentu */}
            <div>
                {children}
            </div>
        </nav>
    );
}
