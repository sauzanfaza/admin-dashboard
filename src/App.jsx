import { Routes, Route } from 'react-router-dom'
import Regis from './pages/Regis'
import Login from './pages/Login'
import MainBoard from './components/MainBoard'
import Orders from './pages/Orders'
import User from './pages/User'
import { useState } from 'react'
import { SearchProvider } from '../SearchContext'

export default function Home() {
    const [user, setUser] = useState(null)
    return (
        <SearchProvider>
        <Routes>
            <Route path="/" element={<Regis />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/mainBoard" element={<MainBoard user={user} setUser={setUser} />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/user-page" element={<User />} />
        </Routes>
        </SearchProvider>
    )
}
