import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import BookTrailerSection from '../components/BookTrailers';
import BookSocialMedia from '../components/BookSocialMedia';
import Testimonials from '../components/Testimonials';
import AuthorsSection from '../components/AuthorsSection';
import ConnectWithUs from '../components/ConnectWithUs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Hubhawks 11 | Modern Publishing & Marketing Solutions</title>
        <meta name="description" content="Hubhawks - Transform ideas into impact with our publishing, marketing, and distribution services." />
      </Head>

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <BookTrailerSection />
      <BookSocialMedia />
      <Testimonials />
      <AuthorsSection />
      <ConnectWithUs />
      <Footer />
    </div>
  );
}