import React from 'react'
import Homepage from "./pages/homepage";
import { LoginPage } from './pages/loginpage.jsx';
import { SignUpPage } from './pages/signuppage.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path="/SignUpPage" element={<SignUpPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
