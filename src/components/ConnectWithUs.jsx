"use client";
import { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const LottieAnimation = dynamic(() => import('lottie-react'), { ssr: false });

// Import your animation data (make sure the path is correct)
import businessTeamAnimation from '../../public/animations/business-team.json';

export default function ConnectWithUs() {
  const animationRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/hubhawks_in/",
      icon: "https://hubhawks.com/wp-content/uploads/2024/02/Instam-unscreen.gif",
      color: "bg-gradient-to-br from-purple-600 to-pink-600"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/hubhawks/",
      icon: "https://hubhawks.com/wp-content/uploads/2024/02/facebook-unscreen.gif",
      color: "bg-blue-600"
    },
    {
      name: "LinkedIn",
      url: "https://in.linkedin.com/company/hubhawks",
      icon: "https://hubhawks.com/wp-content/uploads/2024/02/linkedin-unscreen.gif",
      color: "bg-blue-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Get In Touch
              </span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>

            {/* Social Media Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-center h-12 w-12 rounded-full ${social.color} shadow hover:shadow-md transition-all`}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="absolute -bottom-6 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Animation Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              {businessTeamAnimation ? (
                <LottieAnimation
                  lottieRef={animationRef}
                  animationData={businessTeamAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              ) : (
                <div className="bg-gray-100 w-full h-64 rounded-lg flex items-center justify-center">
                  <p>Loading animation...</p>
                </div>
              )}
              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> contact@hubhawks.com
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}