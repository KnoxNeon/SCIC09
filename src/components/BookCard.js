import Link from 'next/link'
import Image from 'next/image'

export default function BookCard({ book }) {
  return (
    <div className="group bg-white rounded-2xl shadow-book hover-lift overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
            {book.genre}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-900 group-hover:text-purple-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-purple-600 text-sm mb-3 font-medium">by {book.author}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{book.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ${book.price}
          </span>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-sm text-gray-700 ml-1 font-medium">{book.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{book.pages} pages</span>
          <span className="bg-gray-100 px-2 py-1 rounded-full">{book.publishedYear}</span>
        </div>

        <Link
          href={`/books/${book.id}`}
          className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-center py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}