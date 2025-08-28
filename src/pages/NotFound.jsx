import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="mb-3 text-4xl font-semibold tracking-tight">404</h1>
          <p className="mb-8 text-slate-600">
            The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50 md:px-6 md:py-3 md:text-base"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}