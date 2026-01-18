# BookTracker - Personal Reading Library

A modern, responsive book library and personal reading tracker built with Next.js 15 and the App Router. Track your reading journey, discover new books, and organize your literary adventures.

## 🚀 Features

### Core Features
- **Landing Page**: Beautiful homepage with 8 engaging sections showcasing the platform
- **Book Library**: Browse and search through a curated collection of 8 books
- **Book Details**: Detailed view of individual books with comprehensive information
- **Authentication**: Secure login system with cookie-based session management
- **User Dashboard**: Personal dashboard with profile, reading progress, and book management
- **Protected Routes**: Add new books (mock interface) and access dashboard (authenticated users only)
- **Responsive Design**: Fully responsive across all device sizes

### Authentication
- Mock login system with hardcoded credentials
- Cookie-based session management
- Protected routes for authenticated users
- Automatic redirect for unauthenticated access to protected pages

### Book Management
- Browse books with search and filter functionality
- Detailed book information including ratings, descriptions, and metadata
- Mock "Add Book" interface for demonstration (authenticated users)
- Related books suggestions
- Reading list management using localStorage

## 🛠 Technologies Used

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: Cookie-based with js-cookie
- **Data Storage**: JSON file + localStorage (reading list only)
- **Notifications**: React Hot Toast
- **Images**: Next.js Image optimization
- **Icons**: Heroicons (via Tailwind)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💾 Data Storage

This application uses a **JSON-based approach** for data management:

### **📄 Static Book Data**
- **Source**: `/public/books.json` file
- **Contains**: 8 pre-loaded books with complete metadata
- **Access**: Fetched via HTTP requests to `/books.json`

### **🔄 User Data**
- **Reading list**: Stored in `wantToReadList` localStorage key
- **Authentication**: Stored in cookies using js-cookie

### **📚 Book Collection**
The application displays books from the static JSON file. The "Add Book" feature provides a mock interface for demonstration purposes but does not actually add books to the collection.

### Initial Data
The app comes with 8 pre-loaded books in `/public/books.json`:
- The Midnight Library by Matt Haig
- Atomic Habits by James Clear
- The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid
- Educated by Tara Westover
- The Silent Patient by Alex Michaelides
- Becoming by Michelle Obama
- The Alchemist by Paulo Coelho
- Sapiens by Yuval Noah Harari

## 🗺 Route Summary

| Route | Description | Access Level |
|-------|-------------|--------------|
| `/` | Landing page with 8 sections | Public |
| `/books` | Book library with search/filter | Public |
| `/books/[id]` | Individual book details | Public |
| `/login` | Authentication page | Public |
| `/dashboard` | User dashboard with profile and book management | Protected |
| `/add-book` | Mock add new book form | Protected |

## 🔐 Demo Credentials

For testing the authentication system, use these credentials:

- **Email**: `reader@booktracker.com`
- **Password**: `password123`

## 📱 Application Sections

### Landing Page Sections
1. **Hero Section**: Welcome message with call-to-action buttons
2. **Features Section**: Key platform benefits and features
3. **Statistics Section**: Platform metrics and user engagement
4. **How It Works**: Step-by-step guide for new users
5. **Popular Categories**: Interactive category navigation with filtering
6. **Popular Books**: Trending books with ratings
7. **Testimonials**: User reviews and feedback
8. **Newsletter Section**: Email subscription for updates

### Navigation Features
- **Responsive Navbar**: Links to all major sections
- **Authentication State**: Dynamic menu based on login status
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Footer**: Additional links and platform information

## 🎨 Design Features

- **Modern UI**: Clean, professional design with consistent styling
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Interactive Elements**: Hover effects and smooth transitions
- **Loading States**: Skeleton screens and loading indicators
- **Toast Notifications**: User feedback for actions
- **Image Optimization**: Next.js Image component for performance
- **Gradient Themes**: Purple/pink/blue gradient design system

## 🔧 Development Features

- **TypeScript Ready**: Easy migration to TypeScript if needed
- **ESLint Configuration**: Code quality and consistency
- **Tailwind CSS**: Utility-first styling approach
- **Component Architecture**: Reusable and maintainable components
- **Client-side Storage**: localStorage-based data management
- **Dynamic Imports**: Code splitting for better performance

## 📊 Book Data Structure

Each book includes:
- Basic information (title, author, description, fullDescription)
- Pricing and availability
- Metadata (pages, publisher, ISBN, language)
- Ratings and reviews
- Genre classification
- Cover images
- Creation timestamp

## 🚀 Future Enhancements

- **Database Integration**: Replace JSON file with real database
- **NextAuth.js Integration**: Social login (Google, GitHub)
- **User Profiles**: Personal reading statistics
- **Reading Progress**: Track reading status
- **Book Reviews**: User-generated content
- **Wishlist Feature**: Enhanced reading list management
- **Advanced Search**: Filters by multiple criteria
- **Reading Goals**: Set and track reading targets
- **Export/Import**: Backup and restore book collections
- **Real Add Book**: Implement actual book addition functionality

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Book cover images from various sources
- Icons and design inspiration from modern web applications
- Next.js team for the excellent framework and documentation