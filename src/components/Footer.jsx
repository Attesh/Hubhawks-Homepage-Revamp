export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <svg className="h-10 w-10 mr-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20z" fill="#06B2BC"/>
                <path d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" fill="#11305B"/>
                <path d="M24 18c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6z" fill="#06B2BC"/>
              </svg>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Hubhawks
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              We transform your ideas into bestselling realities through strategic marketing and innovative publishing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.57 1.27a.75.75 0 0 0-.26.68v19.9a.75.75 0 0 0 1.17.62l4.92-3.12h11.72a.75.75 0 0 0 .75-.75V4.92a.75.75 0 0 0-.75-.75H1.57zm1.5 1.5h16.36v14.36H7.44a.75.75 0 0 0-.47.16l-3.9 2.47V2.77zm6.68 4.96v5.54h1.5V7.73h-1.5zm3.28 0v5.54h1.5V7.73h-1.5z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1.5c4.69 0 8.5 3.81 8.5 8.5 0 4.69-3.81 8.5-8.5 8.5-4.69 0-8.5-3.81-8.5-8.5 0-4.69 3.81-8.5 8.5-8.5zM8.75 7.75a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-.75-.75zm6.5 0a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-.75-.75z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-teal-400">
              Services
            </h3>
            <ul className="space-y-3">
              {['Book Marketing', 'Amazon Optimization', 'Cover Design', 'Audio Production', 'Author Branding'].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-teal-300 transition-colors flex items-center group"
                  >
                    <svg className="w-2 h-2 mr-3 opacity-0 group-hover:opacity-100 transition" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="4"/>
                    </svg>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-teal-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Testimonials', 'Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-teal-300 transition-colors flex items-center group"
                  >
                    <svg className="w-2 h-2 mr-3 opacity-0 group-hover:opacity-100 transition" viewBox="0 0 8 8" fill="currentColor">
                      <circle cx="4" cy="4" r="4"/>
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-teal-400">
              Connect With Us
            </h3>
            <div className="mb-6">
              <div className="flex items-center text-gray-300 mb-2">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@hubhawks.com
              </div>
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                +91 98765 43210
              </div>
            </div>
            
            <div className="flex space-x-4 mb-6">
              {/* Twitter */}
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gradient-to-br from-blue-400 to-teal-400 p-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-400/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gradient-to-br from-blue-400 to-teal-400 p-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-400/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gradient-to-br from-blue-400 to-teal-400 p-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-400/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-gradient-to-br from-blue-400 to-teal-400 p-3 rounded-full transition-all hover:shadow-lg hover:shadow-teal-400/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-700 rounded-lg py-3 px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-teal-400 p-2 rounded-lg">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2025 Hubhawks Media. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-teal-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-teal-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-teal-300 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}