import { Routes, Route } from 'react-router-dom'
import Regis from './pages/Regis'
import Login from './pages/Login'
import MainBoard from './components/MainBoard'
import { useState } from 'react'

export default function Home() {
    const [user, setUser] = useState(null)
    return (
        <Routes>
            <Route path="/" element={<Regis />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/mainBoard" element={<MainBoard user={user} setUser={setUser} />} />
        </Routes>
    )
}
