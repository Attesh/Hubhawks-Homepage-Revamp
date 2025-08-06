export default function Hero() {
  return (
   <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                  Transform Your Book
                </span><br />
                Into a Bestseller
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                We combine data-driven marketing strategies with creative storytelling to make your book stand out in today's competitive market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#services" 
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-teal-400/30 transition-all text-center font-medium"
                >
                  Explore Services
                </a>
                <a 
                  href="#work" 
                  className="border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-full hover:border-teal-400 hover:text-white transition-all text-center font-medium"
                >
                  See Our Work
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Book Marketing" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}