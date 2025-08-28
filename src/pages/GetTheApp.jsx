import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'
import ConstructionBar from '../components/ConstructionBar.jsx'

export default function GetTheApp() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">Get the App</h1>
<p className="mx-auto mb-8 max-w-xl text-base text-slate-600 md:text-lg">
  This page is temporarily under construction. Please check back soon.
</p>

<div className="flex justify-center mb-8">
  <ConstructionBar />
</div>

<div className="flex items-center justify-center gap-3">
  <a
    href="#"
    className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 md:px-6 md:py-3 md:text-base"
  >
    Download on the App Store
  </a>
  <Link
    to="/"
    className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 md:px-6 md:py-3 md:text-base"
  >
    Back to Home
  </Link>
</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}