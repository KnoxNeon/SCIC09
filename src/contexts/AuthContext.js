'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const login = (token) => {
    Cookies.set('auth-token', token, { expires: 7 })
    setIsLoggedIn(true)
  }

  const logout = () => {
    Cookies.remove('auth-token')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    // Check authentication status on client mount
    const token = Cookies.get('auth-token')
    setIsLoggedIn(!!token)
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      loading, 
      login, 
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}