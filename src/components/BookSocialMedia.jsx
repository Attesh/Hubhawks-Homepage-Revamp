"use client";
import { useState } from 'react';

export default function BookSocialMedia() {
  const [activeTab, setActiveTab] = useState('all');
  
  const bookPromotions = [
    {
      id: 1,
      title: "The Wandering Star",
      author: "Sophia Chen",
      platform: "instagram",
      image: "https://media.istockphoto.com/id/2162169941/photo/bookstore.webp?a=1&b=1&s=612x612&w=0&k=20&c=WNj3n_G7IsFUgsh0tnS0-NHVL8JbJyqtiZFhpdq6ch0=",
      engagement: "12.8K likes",
      date: "2 days ago",
      highlight: true
    },
    {
      id: 2,
      title: "Indra",
      author: "Raj Patel",
      platform: "twitter",
      image: "https://images.unsplash.com/photo-1591951425600-d09958978584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJvb2tzfGVufDB8fDB8fHww",
      engagement: "8.2K retweets",
      date: "1 week ago",
      highlight: false
    },
    {
      id: 3,
      title: "Like a Summer Song",
      author: "Emma Richardson",
      platform: "facebook",
      image: "https://media.istockphoto.com/id/2162169941/photo/bookstore.webp?a=1&b=1&s=612x612&w=0&k=20&c=WNj3n_G7IsFUgsh0tnS0-NHVL8JbJyqtiZFhpdq6ch0=",
      engagement: "15.7K shares",
      date: "3 days ago",
      highlight: true
    },
    {
      id: 4,
      title: "Kaliyuga",
      author: "Michael Chen",
      platform: "tiktok",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww",
      date: "5 hours ago",
      highlight: false
    },
    {
      id: 5,
      title: "Quantum Paradox",
      author: "Dr. Lisa Park",
      platform: "instagram",
      image: "https://images.unsplash.com/photo-1591951425600-d09958978584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGJvb2tzfGVufDB8fDB8fHww",
      engagement: "24.5K likes",
      date: "1 day ago",
      highlight: true
    },
    {
      id: 6,
      title: "Midnight Whispers",
      author: "Sarah Johnson",
      platform: "twitter",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww",
      date: "2 days ago",
      highlight: false
    }
  ];

  const filteredPromotions = activeTab === 'all' 
    ? bookPromotions 
    : bookPromotions.filter(book => book.platform === activeTab);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Book Promotions on Social Media
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're showcasing books across different platforms
          </p>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'all' ? 'bg-white shadow text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              All Platforms
            </button>
            <button
              onClick={() => setActiveTab('instagram')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'instagram' ? 'bg-white shadow text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('twitter')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'twitter' ? 'bg-white shadow text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Twitter
            </button>
            <button
              onClick={() => setActiveTab('facebook')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'facebook' ? 'bg-white shadow text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Facebook
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === 'tiktok' ? 'bg-white shadow text-purple-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              TikTok
            </button>
          </div>
        </div>

        {/* Book Promotion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPromotions.map((book) => (
            <div 
              key={book.id} 
              className={`relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border ${book.highlight ? 'border-purple-300' : 'border-gray-100'}`}
            >
              {/* Platform Badge */}
              <div className={`absolute top-4 right-4 z-10 px-2 py-1 rounded-full text-xs font-medium ${
                book.platform === 'instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                book.platform === 'twitter' ? 'bg-blue-400 text-white' :
                book.platform === 'facebook' ? 'bg-blue-600 text-white' :
                'bg-black text-white'
              }`}>
                {book.platform.charAt(0).toUpperCase() + book.platform.slice(1)}
              </div>

              {/* Book Image */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={book.image} 
                  alt={`${book.title} book cover`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {book.highlight && (
                  <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>

              {/* Book Details */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1 text-gray-900">{book.title}</h3>
                <p className="text-gray-600 mb-3">by {book.author}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {book.engagement}
                  </span>
                  <span>{book.date}</span>
                </div>
                
                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium">
            See More Promotions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}