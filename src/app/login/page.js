'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import toast from 'react-hot-toast'

export default function Login() {
  const { login, isLoggedIn } = useAuth()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Mock credentials
  const MOCK_EMAIL = 'reader@booktracker.com'
  const MOCK_PASSWORD = 'password123'

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      const redirectTo = searchParams.get('redirect') || '/'
      router.push(redirectTo)
    }
  }, [isLoggedIn, router, searchParams])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (formData.email === MOCK_EMAIL && formData.password === MOCK_PASSWORD) {
      // Set auth cookie and update context
      login('mock-jwt-token')
      toast.success('Login successful!')
      
      // Redirect to the page they came from or home page
      const redirectTo = searchParams.get('redirect') || '/'
      router.push(redirectTo)
    } else {
      toast.error('Invalid email or password')
    }

    setIsLoading(false)
  }

  const fillDemoCredentials = () => {
    setFormData({
      email: MOCK_EMAIL,
      password: MOCK_PASSWORD
    })
    toast.success('Demo credentials filled!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center animate-fadeInUp">
          <div className="text-8xl mb-6 animate-pulse-slow">📚</div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Sign in to{' '}
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              BookTracker
            </span>
          </h2>
          <p className="text-lg text-gray-200">
            {searchParams.get('redirect') 
              ? 'Please sign in to continue to your requested page'
              : 'Access your personal reading library'
            }
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="glass rounded-3xl py-10 px-8 shadow-2xl border border-white/20 animate-slideInRight">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-white/20 rounded-xl placeholder-gray-400 bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-4 py-3 border border-white/20 rounded-xl placeholder-gray-400 bg-white/10 backdrop-blur-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  'Sign in'
                )}
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="w-full flex justify-center py-3 px-6 border border-white/30 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="mr-2">🚀</span>
                Fill Demo Credentials
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}