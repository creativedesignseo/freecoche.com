
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
