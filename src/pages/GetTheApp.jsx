// src/pages/GetTheApp.jsx
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Link } from 'react-router-dom'

export default function GetTheApp() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">Get the App</h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600">
            This page is temporarily under construction. Please check back soon.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-base font-semibold text-white hover:bg-neutral-800"
            >
              Download on the App Store
            </a>
            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold hover:bg-slate-50"
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