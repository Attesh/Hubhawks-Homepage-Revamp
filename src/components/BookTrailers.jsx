"use client";
import { useState } from 'react';

export default function BookTrailers() {
  const [activeVideo, setActiveVideo] = useState(null);

  const trailers = [
    {
      title: "The Wandering Star",
      author: "Sophia Chen",
      genre: "Fantasy",
      result: "500K+ Views",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4"
    },
    {
      title: "Indra",
      author: "Raj Patel",
      genre: "Mythology",
      result: "Viral on BookTok",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4"
    },
    {
      title: "Like a Summer Song",
      author: "Emma Richardson",
      genre: "Romance",
      result: "200K+ Views in First Week",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-a-beach-3286-large.mp4"
    },
    {
      title: "Kaliyuga",
      author: "Michael Chen",
      genre: "Historical Fiction",
      result: "Featured on Goodreads",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-book-3290-large.mp4"
    },
    {
      title: "Quantum Paradox",
      author: "Dr. Lisa Park",
      genre: "Sci-Fi",
      result: "50K+ Shares",
      image: "https://images.unsplash.com/photo-1510172951991-856a62a9e395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sci-fi-computer-interface-2293-large.mp4"
    },
    {
      title: "Midnight Whispers",
      author: "Sarah Johnson",
      genre: "Horror",
      result: "Trending on BookTube",
      image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-dark-alley-with-a-single-street-light-3289-large.mp4"
    }
  ];

  const playVideo = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="book-trailers" className="py-20 bg-gray-50">
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <video 
              controls 
              autoPlay 
              className="w-full rounded-lg"
              src={activeVideo}
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Book Trailers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionally produced trailers that bring stories to life and drive engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trailers.map((trailer, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trailer.image} 
                  alt={`${trailer.title} book trailer`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => playVideo(trailer.videoUrl)}
                    className="bg-white/90 hover:bg-white transition-all duration-300 rounded-full p-4 shadow-lg transform group-hover:scale-110"
                  >
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{trailer.title}</h3>
                    <p className="text-gray-600">{trailer.author}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {trailer.genre}
                  </span>
                </div>
                
                <p className="mb-4 text-gray-700">{trailer.result}</p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => playVideo(trailer.videoUrl)}
                    className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors"
                  >
                    Watch trailer
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-pink-400/30 transition-all font-medium"
          >
            View all trailers
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}