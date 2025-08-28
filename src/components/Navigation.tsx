'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex-1">
            <Link href="/" className="text-2xl font-bold text-blue-600 no-underline">
              The Dentists at Gateway Crossing
            </Link>
          </div>
          <div className="flex-1 text-right">
            <div className="inline-flex items-center space-x-2">
              <span className="text-blue-600">📞 </span>
              <a href="tel:3179438339" className="text-blue-600 font-semibold">
                (317) 943-8339
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="hidden md:flex space-x-8 py-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰ Menu
            </button>
            {isMenuOpen && (
              <div className="py-4">
                <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/services" className="block py-2 text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}