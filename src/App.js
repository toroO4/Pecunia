import React from 'react'
import Homepage from "./pages/homepage";
import { LoginPage } from './pages/loginpage.jsx';
import { SignupPage } from './pages/signuppage.jsx';
<<<<<<< HEAD
import '../backend/server.js' 
=======
import  StudentPage  from './pages/studentProfile.jsx';
>>>>>>> origin/Toro

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/student" element={<StudentPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
