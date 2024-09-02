import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Main from "./components/Main"

function App() {

  return (
     <div>
        <Navbar />
        <Hero />
        <Features />
        <Main />
     </div>
  )
}

export default App
