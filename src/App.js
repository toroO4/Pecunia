import React from 'react'
import Homepage from "./pages/homepage";
import { LoginPage } from './pages/loginpage.jsx';


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Login" element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
