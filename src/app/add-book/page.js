'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useProtectedRoute } from '@/hooks/useProtectedRoute'
import toast from 'react-hot-toast'

export default function AddBook() {
  const { isAuthenticated, loading } = useProtectedRoute()
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    fullDescription: '',
    price: '',
    genre: '',
    pages: '',
    publishedYear: '',
    publisher: '',
    isbn: '',
    language: 'English',
    image: ''
  })

  const genres = [
    'Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Thriller', 'Science Fiction',
    'Fantasy', 'Biography', 'History', 'Self-Help', 'Business', 'Health',
    'Travel', 'Cooking', 'Art', 'Religion', 'Philosophy', 'Poetry'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock success - don't actually add the book
      toast.success('Book added successfully! (Demo Mode)')
      console.log('Mock book submission:', formData)
      
      // Reset form
      setFormData({
        title: '',
        author: '',
        description: '',
        fullDescription: '',
        price: '',
        genre: '',
        pages: '',
        publishedYear: '',
        publisher: '',
        isbn: '',
        language: 'English',
        image: ''
      })

      // Redirect to books page after a short delay
      setTimeout(() => {
        router.push('/books')
      }, 1500)

    } catch (error) {
      console.error('Error in mock submission:', error)
      toast.error('Failed to add book. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-purple-600 mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600">Loading add book form...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated && !loading) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-elegant p-8 border border-gray-100 animate-fadeInUp">
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Add New Book
              </span>
            </h1>
            <p className="text-xl text-gray-600">Add a new book to the library collection 📚</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title */}
              <div className="group">
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-3">
                  📖 Book Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter book title"
                />
              </div>

              {/* Author */}
              <div className="group">
                <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-3">
                  ✍️ Author *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  required
                  value={formData.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter author name"
                />
              </div>

              {/* Genre */}
              <div className="group">
                <label htmlFor="genre" className="block text-sm font-semibold text-gray-700 mb-3">
                  🎭 Genre *
                </label>
                <select
                  id="genre"
                  name="genre"
                  required
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                >
                  <option value="">Select a genre</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div className="group">
                <label htmlFor="price" className="block text-sm font-semibold text-gray-700 mb-3">
                  💰 Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="0.00"
                />
              </div>

              {/* Pages */}
              <div className="group">
                <label htmlFor="pages" className="block text-sm font-semibold text-gray-700 mb-3">
                  📄 Number of Pages *
                </label>
                <input
                  type="number"
                  id="pages"
                  name="pages"
                  required
                  min="1"
                  value={formData.pages}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter number of pages"
                />
              </div>

              {/* Published Year */}
              <div className="group">
                <label htmlFor="publishedYear" className="block text-sm font-semibold text-gray-700 mb-3">
                  📅 Published Year *
                </label>
                <input
                  type="number"
                  id="publishedYear"
                  name="publishedYear"
                  required
                  min="1000"
                  max={new Date().getFullYear()}
                  value={formData.publishedYear}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter published year"
                />
              </div>

              {/* Publisher */}
              <div className="group">
                <label htmlFor="publisher" className="block text-sm font-semibold text-gray-700 mb-3">
                  🏢 Publisher
                </label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter publisher name"
                />
              </div>

              {/* ISBN */}
              <div className="group">
                <label htmlFor="isbn" className="block text-sm font-semibold text-gray-700 mb-3">
                  🔢 ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter ISBN"
                />
              </div>

              {/* Language */}
              <div className="group">
                <label htmlFor="language" className="block text-sm font-semibold text-gray-700 mb-3">
                  🌍 Language
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter language"
                />
              </div>

              {/* Image URL */}
              <div className="group">
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-3">
                  🖼️ Cover Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            {/* Short Description */}
            <div className="group">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-3">
                📝 Short Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300 resize-none"
                placeholder="Enter a brief description of the book"
              />
            </div>

            {/* Full Description */}
            <div className="group">
              <label htmlFor="fullDescription" className="block text-sm font-semibold text-gray-700 mb-3">
                📚 Full Description
              </label>
              <textarea
                id="fullDescription"
                name="fullDescription"
                rows={5}
                value={formData.fullDescription}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white group-hover:border-purple-300 resize-none"
                placeholder="Enter a detailed description of the book"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center space-x-6 pt-6">
              <button
                type="button"
                onClick={() => router.push('/books')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium text-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitting ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Adding Book...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="mr-2">📖</span>
                    Add Book
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}