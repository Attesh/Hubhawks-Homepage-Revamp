"use client";
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function AuthorsSection() {
  const authors = [
    {
      name: "Harsheath Chauhan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s",
      genre: "Fantasy",
      books: 3
    },
    {
      name: "Rohan Kailasam",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Nxri6vR0sWwoyFp8l66OnhYe4EYGA-7p5w&s",
      genre: "Thriller",
      books: 5
    },
    {
      name: "Harsha",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpD83xc7HfXgj4OGpO0riLvlaK6tmN8Z9heQ&s",
      genre: "Romance",
      books: 2
    },
    {
      name: "Prabhu Subramanian",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfADk0v4wIbRyhZ76Tzl_dZF4NXCeXkcTXeg&s",
      genre: "Sci-Fi",
      books: 4
    },
    {
      name: "Neha Mittal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Nxri6vR0sWwoyFp8l66OnhYe4EYGA-7p5w&s",
      genre: "Mystery",
      books: 3
    },
    {
      name: "Abhishek Krishnan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfADk0v4wIbRyhZ76Tzl_dZF4NXCeXkcTXeg&s",
      genre: "Historical Fiction",
      books: 1
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Authors We've Worked With
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the talented authors who have trusted us with their publishing journey
          </p>
        </div>

        {/* Authors Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            {authors.map((author, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={author.image} 
                      alt={author.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-purple-600">
                        {author.genre}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{author.books} {author.books === 1 ? 'Book' : 'Books'}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className="w-4 h-4 text-yellow-400" 
                            fill={i < Math.min(author.books, 5) ? "currentColor" : "none"} 
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -ml-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

      
      </div>
    </section>
  );
}