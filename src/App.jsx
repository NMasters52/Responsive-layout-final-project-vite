import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {

  return (
     <div>
        <Navbar />
        <Hero />
        <Features />
        <Main />
        <Footer />
     </div>
  )
}

export default App
