import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Users from './components/Users'
function App() {
  const api = import.meta.env.VITE_SERVER_API;
  // console.log(api,"api ");
  return (
    <>
      <h2>Farm Setu Website</h2>
      <p>{api} window api</p>
      <Users/>
    </>
  )
}

export default App
