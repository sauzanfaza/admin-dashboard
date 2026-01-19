export default function Navbar({user, title, children}) {

    return (
        <header className="w-full bg-white shadow p-4 flex items-center justify-between">
            <div className="flex items-center">
            <h2 className="text-lg font-semibold">
                {title ? `${title}` : `Welcome ${user ? user.name : ""}`}
            </h2>
            </div>

            <div>
                {children}
            </div>
        </header>
    );
}
