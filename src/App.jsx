import { Routes, Route } from 'react-router-dom'
import Regis from './pages/Regis'
import Login from './pages/Login'
import MainBoard from './components/MainBoard'

export default function Home() {
    return (
        <Routes>
            <Route path="/" element={<Regis />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainBoard" element={<MainBoard />} />
        </Routes>
    )
}
