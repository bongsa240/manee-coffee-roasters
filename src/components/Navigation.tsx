'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.jpg"
                alt="Manee Coffee Roasters"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold text-coffee-dark">
                Manee Coffee Roasters
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#products" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                Products
              </a>
              <a href="#laos" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                Laos
              </a>
              <a href="#contact" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-coffee-dark hover:text-coffee-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coffee-brown"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              About
            </a>
            <a href="#products" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              Products
            </a>
            <a href="#laos" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              Laos
            </a>
            <a href="#contact" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}