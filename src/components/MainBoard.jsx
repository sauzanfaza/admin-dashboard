import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

export default function MainBoard({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - butuh isOpen untuk mobile, dan setIsOpen untuk menutup menu */}
      <Sidebar user={user} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar - butuh setIsOpen untuk membuka menu  / si sidebar nimpa navbar kalo mode mobile*/}
        <Navbar user={user} setIsOpen={setIsOpen} />
        
        <main className="p-4">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}