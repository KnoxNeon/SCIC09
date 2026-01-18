'use client'

import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import TypeWriterEffect to avoid SSR issues
const TypeWriterEffect = dynamic(() => import('react-typewriter-effect'), {
  ssr: false,
  loading: () => <span>Welcome to BookTracker</span>
})

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fadeInUp">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-center">
              <TypeWriterEffect
                textStyle={{
                  fontFamily: 'inherit',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 'inherit',
                  textAlign: 'center',
                  display: 'block',
                  width: '100%'
                }}
                startDelay={500}
                cursorColor="white"
                multiText={[
                  'Welcome to BookTracker',
                  'Track Your Reading Journey',
                  'Discover Amazing Books',
                  'Organize Your Library'
                ]}
                multiTextDelay={3000}
                typeSpeed={100}
                multiTextLoop={true}
              />
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-200">
              Your personal reading companion. Track your reading journey, discover new books, and organize your literary adventures with style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/books"
                className="group bg-white text-purple-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center"
              >
                <span className="mr-2">📚</span>
                Browse Books
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/login"
                className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center"
              >
                <span className="mr-2">🚀</span>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 animate-pulse-slow">
          <div className="text-6xl opacity-20">📖</div>
        </div>
        <div className="absolute bottom-20 right-20 animate-pulse-slow" style={{animationDelay: '1s'}}>
          <div className="text-6xl opacity-20">✨</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                BookTracker?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the features that make BookTracker the perfect companion for your reading journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">Track Reading Progress</h3>
              <p className="text-gray-600 leading-relaxed">Monitor your reading habits and see your progress over time with beautiful visualizations</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">Discover New Books</h3>
              <p className="text-gray-600 leading-relaxed">Find your next great read with our curated book collection and smart recommendations</p>
            </div>
            <div className="group text-center p-8 bg-white rounded-3xl shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">Organize Your Library</h3>
              <p className="text-gray-600 leading-relaxed">Keep your personal book collection organized and accessible with powerful tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Reading Community
              </span>
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Be part of a thriving community of book lovers from around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Books Available", icon: "📚", gradient: "from-blue-500 to-cyan-500" },
              { number: "5,000+", label: "Active Readers", icon: "👥", gradient: "from-purple-500 to-pink-500" },
              { number: "50,000+", label: "Books Tracked", icon: "📊", gradient: "from-green-500 to-emerald-500" },
              { number: "4.8★", label: "User Rating", icon: "⭐", gradient: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="group text-center animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="glass rounded-3xl p-8 hover-lift border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-200 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <Link
              href="/login"
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🚀</span>
              Join the Community
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Get started with BookTracker in three simple steps and transform your reading experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your free account and set up your personalized reading profile in seconds",
                icon: "🚀",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50"
              },
              {
                step: "2", 
                title: "Add Books",
                description: "Browse our extensive collection or add your own books to build your digital library",
                icon: "📚",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50"
              },
              {
                step: "3",
                title: "Track Progress",
                description: "Monitor your reading journey, set goals, and discover your next favorite book",
                icon: "📊",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50"
              }
            ].map((step, index) => (
              <div key={index} className="group text-center animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`relative bg-gradient-to-br ${step.bgGradient} p-8 rounded-3xl shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 overflow-hidden`}>
                  {/* Step number circle */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/50 rounded-full blur-sm"></div>
                  <div className="absolute bottom-4 right-8 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-20">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore books by your favorite genres
            </p>
          </div>
          
          {/* Horizontal Category Bar */}
          <div className="group/bar bg-blue-900 rounded-2xl p-2 transition-all duration-300 shadow-2xl animate-fadeInUp">
            <div className="flex flex-wrap justify-center items-center gap-2">
              {[
                { name: "Fiction", icon: "📚" },
                { name: "Romance", icon: "💕" },
                { name: "Thriller", icon: "🔍" },
                { name: "Biography", icon: "👤" },
                { name: "Self-Help", icon: "🎯" },
                { name: "History", icon: "🏛️" }
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/books?category=${encodeURIComponent(category.name)}`}
                  className="group/item relative px-6 py-4 rounded-xl text-white hover:bg-blue-600 transition-all duration-300 flex items-center space-x-3 min-w-fit"
                >
                  <span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <span className="font-semibold text-lg whitespace-nowrap">
                    {category.name}
                  </span>
                  
                  {/* Hover indicator */}
                  <div className="absolute inset-0 bg-blue-400/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Alternative: Responsive stacked version for mobile */}
          <div className="md:hidden mt-8">
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Fiction", icon: "📚" },
                { name: "Romance", icon: "💕" },
                { name: "Thriller", icon: "🔍" },
                { name: "Biography", icon: "👤" },
                { name: "Self-Help", icon: "🎯" },
                { name: "History", icon: "🏛️" }
              ].map((category, index) => (
                <Link
                  key={index}
                  href={`/books?category=${encodeURIComponent(category.name)}`}
                  className="bg-blue-900 hover:bg-blue-600 text-white p-4 rounded-xl text-center transition-all duration-300 flex flex-col items-center space-y-2 shadow-lg"
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-semibold text-sm">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Books{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                This Month
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover what other readers are enjoying and find your next great read
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "The Midnight Library", 
                author: "Matt Haig", 
                rating: "4.8", 
                gradient: "from-blue-500 to-purple-600",
                image: "https://www.librariesni.org.uk/media/3osjiezx/midnight-library.jpeg"
              },
              { 
                title: "Atomic Habits", 
                author: "James Clear", 
                rating: "4.9", 
                gradient: "from-purple-500 to-pink-600",
                image: "https://0.academia-photos.com/attachment_thumbnails/105741810/mini_magick20230915-1-9p5k2q.png?1694777602"
              },
              { 
                title: "The Seven Husbands", 
                author: "Taylor Jenkins Reid", 
                rating: "4.7", 
                gradient: "from-pink-500 to-rose-600",
                image: "https://img1.od-cdn.com/ImageType-400/0439-1/%7B42631B71-955C-447D-B942-23CD63C897F6%7DIMG400.JPG"
              },
              { 
                title: "Educated", 
                author: "Tara Westover", 
                rating: "4.6", 
                gradient: "from-green-500 to-emerald-600",
                image: "https://imgv2-2-f.scribdassets.com/img/document/807163537/original/175315a0d0/1?v=1"
              }
            ].map((book, index) => (
              <div key={index} className="group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white p-8 rounded-3xl text-center shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="w-24 h-32 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-purple-600 text-sm mb-4 font-medium">{book.author}</p>
                    
                    <div className="flex items-center justify-center bg-yellow-50 px-4 py-2 rounded-full">
                      <span className="text-yellow-500 text-xl mr-2">★</span>
                      <span className="font-bold text-gray-800">{book.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/books"
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">📚</span>
              Explore All Books
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Readers Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied readers who have transformed their reading experience with BookTracker
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "BookTracker has completely transformed how I manage my reading. I love being able to track my progress and discover new books through their amazing recommendations!",
                name: "Sarah Johnson",
                role: "Avid Reader",
                avatar: "👩‍💼",
                gradient: "from-blue-500 to-purple-600"
              },
              {
                quote: "The interface is so intuitive and beautiful. It makes organizing my book collection a joy rather than a chore. Best reading app I've ever used!",
                name: "Michael Chen",
                role: "Book Collector",
                avatar: "👨‍💻",
                gradient: "from-purple-500 to-pink-600"
              },
              {
                quote: "I've discovered so many amazing books through BookTracker's community features. It's like having a personal librarian and book club all in one!",
                name: "Emily Rodriguez",
                role: "Literature Student",
                avatar: "👩‍🎓",
                gradient: "from-pink-500 to-rose-600"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="bg-white p-8 rounded-3xl shadow-elegant hover-lift border border-gray-100 hover:border-purple-200 transition-all duration-300 relative overflow-hidden h-full">
                  {/* Decorative quote mark */}
                  <div className="absolute top-4 right-4 text-6xl text-purple-100 font-serif">"</div>
                  
                  {/* Star rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-purple-600 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-10 -translate-x-10 opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Trusted by readers worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl">📚</div>
              <div className="text-2xl">⭐</div>
              <div className="text-2xl">👥</div>
              <div className="text-2xl">🏆</div>
              <div className="text-2xl">💝</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-16 left-16 animate-pulse-slow">
          <div className="text-4xl opacity-20">📧</div>
        </div>
        <div className="absolute bottom-16 right-16 animate-pulse-slow" style={{animationDelay: '1s'}}>
          <div className="text-4xl opacity-20">📚</div>
        </div>
        <div className="absolute top-32 right-32 animate-pulse-slow" style={{animationDelay: '2s'}}>
          <div className="text-4xl opacity-20">✨</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fadeInUp">
            <div className="text-6xl mb-8">📬</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stay in the{' '}
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Reading Loop
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
              Get personalized book recommendations, reading tips, exclusive content, and be the first to know about new features and community highlights.
            </p>
            
            {/* Newsletter form */}
            <div className="max-w-2xl mx-auto">
              <form className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-lg"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">📧</span>
                  Subscribe
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: "📖",
                    title: "Book Recommendations",
                    description: "Curated picks based on your reading preferences"
                  },
                  {
                    icon: "💡",
                    title: "Reading Tips",
                    description: "Expert advice to enhance your reading experience"
                  },
                  {
                    icon: "🎉",
                    title: "Exclusive Updates",
                    description: "Be first to know about new features and events"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="glass rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="text-3xl mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">No spam, ever</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">Unsubscribe anytime</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-sm">5,000+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}