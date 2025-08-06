"use client";

export default function Portfolio() {
  const projects = [
    {
      title: "The Silent Echo",
      author: "Emma Richardson",
      genre: "Psychological Thriller",
      result: "#1 Amazon Bestseller",
      image: "/images/silent-echo.webp",
      link: "#"
    },
    {
      title: "Quantum Legacy",
      author: "Dr. Michael Chen",
      genre: "Science Fiction",
      result: "Wall Street Journal Bestseller",
      image: "/images/quantum-legacy.webp",
      link: "#"
    },
    {
      title: "Beneath the Surface",
      author: "Sarah Johnson",
      genre: "Mystery",
      result: "100,000+ copies sold",
      image: "/images/beneath-surface.webp",
      link: "#"
    },
    {
      title: "The Last Diplomat",
      author: "James Wilson",
      genre: "Political Thriller",
      result: "Optioned for TV adaptation",
      image: "/images/last-diplomat.webp",
      link: "#"
    },
    {
      title: "Culinary Chronicles",
      author: "Maria Garcia",
      genre: "Cookbook",
      result: "James Beard Award Nominee",
      image: "/images/culinary-chronicles.webp",
      link: "#"
    },
    {
      title: "Raising Tomorrow",
      author: "Dr. Lisa Park",
      genre: "Parenting",
      result: "50,000+ copies in first month",
      image: "/images/raising-tomorrow.webp",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've transformed manuscripts into market successes across genres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} book cover`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.author}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {project.genre}
                  </span>
                </div>
                
                <p className="mb-4 text-gray-700">{project.result}</p>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.link} 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
                  >
                    View case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </a>
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
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-teal-400/30 transition-all font-medium"
          >
            See more success stories
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}