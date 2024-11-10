import React from 'react'
import './App.css'
import Users from './components/Users'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<Users />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>
  )
}

export default App
