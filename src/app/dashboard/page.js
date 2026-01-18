'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import Link from 'next/link'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function Dashboard() {
  const { logout } = useAuth()
  const { isAuthenticated, loading } = useProtectedRoute()
  const [activeTab, setActiveTab] = useState('profile')
  const router = useRouter()

  // Mock user data
  const [userData] = useState({
    name: 'Book Lover',
    email: 'reader@booktracker.com',
    joinDate: 'January 2024',
    totalBooks: 12,
    currentlyReading: 3,
    wantToRead: 8,
    completed: 15,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  })

  const [wantToRead, setWantToRead] = useState([])
  const [currentlyReading] = useState([
    {
      id: 3,
      title: "The Midnight Library",
      author: "Matt Haig",
      progress: 65,
      image: "https://www.librariesni.org.uk/media/3osjiezx/midnight-library.jpeg"
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      progress: 30,
      image: "https://0.academia-photos.com/attachment_thumbnails/105741810/mini_magick20230915-1-9p5k2q.png?1694777602"
    },
    {
      id: 5,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      progress: 80,
      image: "https://bookowlsbd.com/cdn/shop/files/3_eb6eab59-1fa5-40a1-98e1-e14e8a6d00c0.png?v=1704143527"
    }
  ])

  // Mock books data
  const [myBooks] = useState([
    {
      id: 1,
      title: "My Personal Journal",
      author: "Book Lover",
      status: "completed",
      dateAdded: "2024-01-15",
      image: "https://www.librariesni.org.uk/media/3osjiezx/midnight-library.jpeg"
    },
    {
      id: 2,
      title: "Learning React",
      author: "Book Lover",
      status: "currently-reading",
      dateAdded: "2024-01-20",
      image: "https://0.academia-photos.com/attachment_thumbnails/105741810/mini_magick20230915-1-9p5k2q.png?1694777602"
    }
  ])

  // Load want to read list from localStorage (keep this dynamic for the book details functionality)
  useEffect(() => {
    if (isAuthenticated) {
      const savedWantToRead = JSON.parse(localStorage.getItem('wantToReadList') || '[]')
      setWantToRead(savedWantToRead)
    }
  }, [isAuthenticated])

  const removeFromWantToRead = (bookId) => {
    const updatedList = wantToRead.filter(book => book.id !== bookId)
    setWantToRead(updatedList)
    localStorage.setItem('wantToReadList', JSON.stringify(updatedList))
    toast.success('Removed from reading list!')
  }

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully!')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated && !loading) {
    return null
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'my-books', name: 'My Books', icon: '📚' },
    { id: 'currently-reading', name: 'Currently Reading', icon: '📖' },
    { id: 'want-to-read', name: 'Want to Read', icon: '📝' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fadeInUp">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-600">Welcome back, {userData.name}! 📚</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { icon: "📚", value: userData.totalBooks, label: "Total Books", gradient: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50" },
            { icon: "📖", value: userData.currentlyReading, label: "Currently Reading", gradient: "from-purple-500 to-pink-500", bg: "from-purple-50 to-pink-50" },
            { icon: "📝", value: userData.wantToRead, label: "Want to Read", gradient: "from-yellow-500 to-orange-500", bg: "from-yellow-50 to-orange-50" },
            { icon: "✅", value: userData.completed, label: "Completed", gradient: "from-green-500 to-emerald-500", bg: "from-green-50 to-emerald-50" }
          ].map((stat, index) => (
            <div key={index} className="group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`bg-gradient-to-br ${stat.bg} p-8 rounded-3xl shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <div className="w-6 h-6 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-3xl shadow-elegant mb-8 border border-gray-100 animate-slideInRight">
          <div className="border-b border-gray-100">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-6 px-4 border-b-2 font-medium text-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600 bg-purple-50/50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50'
                  } rounded-t-2xl`}
                >
                  <span className="text-2xl mr-3">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="max-w-4xl animate-fadeInUp">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 mb-8 border border-purple-100">
                  <div className="flex items-center mb-8">
                    <div className="relative w-24 h-24 mr-8">
                      <Image
                        src={userData.avatar}
                        alt="Profile"
                        fill
                        className="rounded-full object-cover border-4 border-white shadow-lg"
                        sizes="96px"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        {userData.name}
                      </h2>
                      <p className="text-gray-600 text-lg">{userData.email}</p>
                      <p className="text-gray-500">📅 Member since {userData.joinDate}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                      <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                        <span className="text-2xl mr-3">📊</span>
                        Reading Statistics
                      </h3>
                      <div className="space-y-4">
                        {[
                          { label: "Books Added", value: userData.totalBooks, icon: "📚", color: "from-blue-500 to-cyan-500" },
                          { label: "Currently Reading", value: userData.currentlyReading, icon: "📖", color: "from-purple-500 to-pink-500" },
                          { label: "Want to Read", value: userData.wantToRead, icon: "📝", color: "from-yellow-500 to-orange-500" },
                          { label: "Completed", value: userData.completed, icon: "✅", color: "from-green-500 to-emerald-500" }
                        ].map((stat, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                            <div className="flex items-center">
                              <span className="text-xl mr-3">{stat.icon}</span>
                              <span className="text-gray-700">{stat.label}:</span>
                            </div>
                            <span className={`font-bold text-lg bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-lg">
                      <h3 className="font-bold text-gray-900 mb-4 text-xl flex items-center">
                        <span className="text-2xl mr-3">⚡</span>
                        Quick Actions
                      </h3>
                      <div className="space-y-4">
                        <Link
                          href="/add-book"
                          className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-4 px-6 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <span className="text-lg mr-2">📖</span>
                          Add New Book
                        </Link>
                        <Link
                          href="/books"
                          className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-center py-4 px-6 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <span className="text-lg mr-2">🔍</span>
                          Browse Library
                        </Link>
                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border border-yellow-200">
                          <p className="text-sm text-gray-700 text-center">
                            <span className="text-lg mr-2">🎯</span>
                            Keep reading to reach your goals!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* My Books Tab */}
            {activeTab === 'my-books' && (
              <div className="animate-fadeInUp">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center">
                    <span className="text-3xl mr-3">📚</span>
                    My Books
                  </h2>
                  <Link
                    href="/add-book"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-2">➕</span>
                    Add New Book
                  </Link>
                </div>

                {myBooks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myBooks.map((book, index) => (
                      <div key={book.id} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="flex items-start space-x-4">
                          <div className="relative w-16 h-20 flex-shrink-0">
                            <Image
                              src={book.image}
                              alt={book.title}
                              fill
                              className="object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 truncate text-lg group-hover:text-purple-700 transition-colors">{book.title}</h3>
                            <p className="text-purple-600 text-sm mb-2 font-medium">by {book.author}</p>
                            <p className="text-gray-500 text-xs mb-3">📅 Added: {book.dateAdded}</p>
                            <span className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${
                              book.status === 'completed' 
                                ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200' 
                                : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border border-blue-200'
                            }`}>
                              {book.status === 'completed' ? '✅ Completed' : '📖 Currently Reading'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                    <div className="text-8xl mb-6 animate-pulse-slow">📚</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No books added yet</h3>
                    <p className="text-gray-600 mb-6 text-lg">Start building your personal library</p>
                    <Link
                      href="/add-book"
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-lg mr-2">📖</span>
                      Add Your First Book
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Currently Reading Tab */}
            {activeTab === 'currently-reading' && (
              <div className="animate-fadeInUp">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center">
                  <span className="text-3xl mr-3">📖</span>
                  Currently Reading
                </h2>
                
                {currentlyReading.length > 0 ? (
                  <div className="space-y-6">
                    {currentlyReading.map((book, index) => (
                      <div key={book.id} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="flex items-start space-x-6">
                          <div className="relative w-20 h-24 flex-shrink-0">
                            <Image
                              src={book.image}
                              alt={book.title}
                              fill
                              className="object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-purple-700 transition-colors">{book.title}</h3>
                            <p className="text-purple-600 text-sm mb-4 font-medium">by {book.author}</p>
                            <div className="mb-4">
                              <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span className="font-medium">📊 Reading Progress</span>
                                <span className="font-bold text-purple-600">{book.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div 
                                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 shadow-sm"
                                  style={{ width: `${book.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="flex space-x-3">
                              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                <span className="mr-1">📈</span>
                                Update Progress
                              </button>
                              <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                <span className="mr-1">✅</span>
                                Mark Complete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                    <div className="text-8xl mb-6 animate-pulse-slow">📖</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No books in progress</h3>
                    <p className="text-gray-600 mb-6 text-lg">Start reading a book to track your progress</p>
                    <Link
                      href="/books"
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-lg mr-2">🔍</span>
                      Browse Books
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Want to Read Tab */}
            {activeTab === 'want-to-read' && (
              <div className="animate-fadeInUp">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 flex items-center">
                  <span className="text-3xl mr-3">📝</span>
                  Want to Read
                </h2>
                
                {wantToRead.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wantToRead.map((book, index) => (
                      <div key={book.id} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="relative w-16 h-20 flex-shrink-0">
                            <Image
                              src={book.image}
                              alt={book.title}
                              fill
                              className="object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-gray-900 truncate text-lg group-hover:text-purple-700 transition-colors">{book.title}</h3>
                            <p className="text-purple-600 text-sm mb-2 font-medium">by {book.author}</p>
                            <p className="text-gray-500 text-xs">📅 Added: {book.dateAdded}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-3 py-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <span className="mr-1">📖</span>
                            Start Reading
                          </button>
                          <button 
                            onClick={() => removeFromWantToRead(book.id)}
                            className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-3 py-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                          >
                            <span className="mr-1">🗑️</span>
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100">
                    <div className="text-8xl mb-6 animate-pulse-slow">📝</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">No books in wishlist</h3>
                    <p className="text-gray-600 mb-6 text-lg">Add books you want to read later</p>
                    <Link
                      href="/books"
                      className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-lg mr-2">🔍</span>
                      Discover Books
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}