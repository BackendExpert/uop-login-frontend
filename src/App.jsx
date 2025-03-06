import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StaffLogin from './pages/Auth/StaffLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StaffLogin /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
