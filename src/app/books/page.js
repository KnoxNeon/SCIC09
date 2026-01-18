'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import BookCard from '@/components/BookCard'

function BooksContent() {
  const searchParams = useSearchParams()
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [error, setError] = useState(null)

  // Fetch books from JSON file
  const fetchBooks = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch books from JSON file
      const response = await fetch('/books.json')
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      
      const data = await response.json()
      setBooks(data.books)
    } catch (error) {
      console.error('Error fetching books:', error)
      setError(error.message)
      setBooks([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Check for category parameter from URL
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedGenre(categoryParam)
    }
  }, [searchParams])

  useEffect(() => {
    fetchBooks()
  }, [])

  // Get unique genres from the fetched books
  const genres = ['all', ...new Set(books.map(book => book.genre))]

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <div className="bg-white rounded-3xl shadow-elegant p-12 max-w-md mx-auto border border-gray-100">
              <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-4 border-purple-200 border-t-purple-600 mx-auto mb-6"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Books...</h3>
              <p className="text-gray-600">Discovering amazing reads for you</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <div className="bg-white rounded-3xl shadow-elegant p-12 max-w-md mx-auto border border-gray-100">
              <div className="text-8xl mb-6">⚠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Books</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {error}. Please try refreshing the page.
              </p>
              <button
                onClick={fetchBooks}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Book{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {selectedGenre !== 'all' ? `Browsing ${selectedGenre} books` : 'Discover your next great read from our curated collection'}
          </p>
          {selectedGenre !== 'all' && (
            <div className="mt-6">
              <button
                onClick={() => setSelectedGenre('all')}
                className="group inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-2xl font-medium hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-2">📚</span>
                Showing: {selectedGenre}
                <svg className="w-5 h-5 ml-2 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-slideInRight">
          <div className="bg-white rounded-3xl shadow-elegant p-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Books</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search books or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:w-64">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Genre</label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg bg-white"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'All Genres' : genre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results count and refresh */}
        <div className="mb-8 flex justify-between items-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 inline-block">
            <p className="text-purple-800 font-medium">
              📊 Showing {filteredBooks.length} of {books.length} books
            </p>
          </div>
          <button
            onClick={fetchBooks}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book, index) => (
              <div key={book.id} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fadeInUp">
            <div className="bg-white rounded-3xl shadow-elegant p-12 max-w-md mx-auto border border-gray-100">
              <div className="text-8xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No books found</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Try adjusting your search or filter criteria to discover more books
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedGenre('all')
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Books() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInUp">
            <div className="bg-white rounded-3xl shadow-elegant p-12 max-w-md mx-auto border border-gray-100">
              <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-4 border-purple-200 border-t-purple-600 mx-auto mb-6"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Loading Books...</h3>
              <p className="text-gray-600">Discovering amazing reads for you</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <BooksContent />
    </Suspense>
  )
}