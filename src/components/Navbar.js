'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <nav className="bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white shadow-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="https://i.ibb.co.com/zWTm4zDN/logo.png"
                  alt="BookTracker Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                BookTracker
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/books" className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <span className="relative z-10">Books</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <span className="relative z-10">Dashboard</span>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/add-book" className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                  <span className="relative z-10">Add Book</span>
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <><Link href="/login" className="block px-3 py-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-colors">
                  Login
                </Link>
               
                </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-200 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fadeInUp">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 rounded-lg mt-2 backdrop-blur-sm">
              <Link href="/" className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors">
                Home
              </Link>
              <Link href="/books" className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors">
                Books
              </Link>
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors">
                    Dashboard
                  </Link>
                  <Link href="/add-book" className="block px-3 py-2 hover:bg-white/10 rounded-md transition-colors">
                    Add Book
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
              <><Link href="/login" className="block px-3 py-2 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-md transition-colors">
                  Login
                </Link>
                
                </>
                
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}