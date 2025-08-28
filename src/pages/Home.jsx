// src/pages/Home.jsx
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import Footer from '../components/Footer.jsx'
import PriceTicker from '../components/PriceTicker.jsx'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PriceTicker /> 
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}