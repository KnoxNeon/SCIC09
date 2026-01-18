'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function BookDetails() {
  const params = useParams()
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isInWantToRead, setIsInWantToRead] = useState(false)
  const [addingToList, setAddingToList] = useState(false)

  // Mock book data (same as in books page)
  const mockBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
      fullDescription: "Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place.",
      price: 14.99,
      genre: "Fiction",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 288,
      publishedYear: 2020,
      publisher: "Canongate Books",
      isbn: "978-1786892737",
      language: "English"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.",
      fullDescription: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
      price: 16.99,
      genre: "Self-Help",
      rating: 4.9,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 320,
      publishedYear: 2018,
      publisher: "Avery",
      isbn: "978-0735211292",
      language: "English"
    },
    {
      id: 3,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      description: "A reclusive Hollywood icon finally tells her story to a young journalist, revealing shocking secrets.",
      fullDescription: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now?",
      price: 13.99,
      genre: "Romance",
      rating: 4.7,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 400,
      publishedYear: 2017,
      publisher: "Atria Books",
      isbn: "978-1501161933",
      language: "English"
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
      fullDescription: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of Tara's older brothers became violent.",
      price: 15.99,
      genre: "Biography",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 334,
      publishedYear: 2018,
      publisher: "Random House",
      isbn: "978-0399590504",
      language: "English"
    },
    {
      id: 5,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      description: "A woman's act of violence against her husband and her refusal to speak sends shockwaves through London.",
      fullDescription: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
      price: 12.99,
      genre: "Thriller",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 336,
      publishedYear: 2019,
      publisher: "Celadon Books",
      isbn: "978-1250301697",
      language: "English"
    },
    {
      id: 6,
      title: "Becoming",
      author: "Michelle Obama",
      description: "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world.",
      fullDescription: "In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history.",
      price: 17.99,
      genre: "Biography",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 448,
      publishedYear: 2018,
      publisher: "Crown",
      isbn: "978-1524763138",
      language: "English"
    },
    {
      id: 7,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description: "A magical story that inspires us to follow our dreams and listen to our hearts.",
      fullDescription: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined.",
      price: 11.99,
      genre: "Fiction",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 163,
      publishedYear: 1988,
      publisher: "HarperOne",
      isbn: "978-0062315007",
      language: "English"
    },
    {
      id: 8,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      description: "A brief history of humankind, exploring how Homo sapiens came to dominate the world.",
      fullDescription: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be 'human.'",
      price: 18.99,
      genre: "History",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1681127703i/125209426.jpg",
      pages: 443,
      publishedYear: 2011,
      publisher: "Harper",
      isbn: "978-0062316097",
      language: "English"
    }
  ]

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const foundBook = mockBooks.find(b => b.id === parseInt(params.id))
      if (foundBook) {
        setBook(foundBook)
        
        // Check if book is already in want to read list (mock check)
        if (isLoggedIn) {
          const wantToReadList = JSON.parse(localStorage.getItem('wantToReadList') || '[]')
          setIsInWantToRead(wantToReadList.some(b => b.id === foundBook.id))
        }
      }
      setLoading(false)
    }

    if (params.id) {
      fetchBook()
    }
  }, [params.id, isLoggedIn])

  const handleAddToReadingList = async () => {
    if (!isLoggedIn) {
      // Redirect to login with current page as redirect parameter
      const currentPath = encodeURIComponent(`/books/${params.id}`)
      router.push(`/login?redirect=${currentPath}`)
      return
    }

    if (!book) return

    setAddingToList(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Get current want to read list from localStorage (mock storage)
      const wantToReadList = JSON.parse(localStorage.getItem('wantToReadList') || '[]')
      
      if (isInWantToRead) {
        // Remove from want to read list
        const updatedList = wantToReadList.filter(b => b.id !== book.id)
        localStorage.setItem('wantToReadList', JSON.stringify(updatedList))
        setIsInWantToRead(false)
        toast.success('Removed from reading list!')
      } else {
        // Add to want to read list
        const bookToAdd = {
          id: book.id,
          title: book.title,
          author: book.author,
          image: book.image,
          dateAdded: new Date().toISOString().split('T')[0]
        }
        
        // Check if already exists
        if (!wantToReadList.some(b => b.id === book.id)) {
          wantToReadList.push(bookToAdd)
          localStorage.setItem('wantToReadList', JSON.stringify(wantToReadList))
          setIsInWantToRead(true)
          toast.success('Added to reading list!')
        } else {
          toast.info('Book is already in your reading list!')
        }
      }
    } catch (error) {
      toast.error('Failed to update reading list. Please try again.')
    } finally {
      setAddingToList(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading book details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Book Not Found</h1>
          <p className="text-gray-600 mb-8">The book you're looking for doesn't exist.</p>
          <Link
            href="/books"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Books
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/books"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Books
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Book Image */}
            <div className="md:w-1/3">
              <div className="relative h-96 md:h-full">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="md:w-2/3 p-8">
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {book.genre}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  <span className="text-yellow-500 text-lg">★</span>
                  <span className="text-lg font-semibold ml-1">{book.rating}</span>
                  <span className="text-gray-500 ml-1">/5</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">${book.price}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Pages:</span>
                  <span className="ml-2 text-gray-600">{book.pages}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Published:</span>
                  <span className="ml-2 text-gray-600">{book.publishedYear}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Publisher:</span>
                  <span className="ml-2 text-gray-600">{book.publisher}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Language:</span>
                  <span className="ml-2 text-gray-600">{book.language}</span>
                </div>
                <div className="col-span-2">
                  <span className="font-semibold text-gray-700">ISBN:</span>
                  <span className="ml-2 text-gray-600">{book.isbn}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{book.fullDescription}</p>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={handleAddToReadingList}
                  disabled={addingToList}
                  className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    isInWantToRead 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {addingToList ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {isInWantToRead ? 'Removing...' : 'Adding...'}
                    </span>
                  ) : (
                    <>
                      {isInWantToRead ? (
                        <>
                          <span className="mr-2">✓</span>
                          In Reading List
                        </>
                      ) : (
                        <>
                          <span className="mr-2">📚</span>
                          Add to Reading List
                        </>
                      )}
                    </>
                  )}
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="mr-2">📤</span>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Books in {book.genre}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {mockBooks
              .filter(b => b.genre === book.genre && b.id !== book.id)
              .slice(0, 4)
              .map(relatedBook => (
                <Link key={relatedBook.id} href={`/books/${relatedBook.id}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={relatedBook.image}
                        alt={relatedBook.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 line-clamp-2">{relatedBook.title}</h3>
                      <p className="text-gray-600 text-sm">{relatedBook.author}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-blue-600 font-semibold">${relatedBook.price}</span>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm text-gray-600 ml-1">{relatedBook.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}