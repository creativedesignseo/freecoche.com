import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src="/logo-freecoche.svg" alt="FreeCoche.com" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <HashLink smooth to="/#como-funciona" className="text-slate-600 hover:text-primary transition-colors font-medium">Cómo funciona</HashLink>
            <HashLink smooth to="/#faq" className="text-slate-600 hover:text-primary transition-colors font-medium">Preguntas frecuentes</HashLink>
            <a 
              href="tel:+34612452875" 
              className="flex items-center gap-2 bg-primary text-secondary px-6 py-2.5 rounded-full hover:bg-primary-dark hover:text-white transition-all transform hover:scale-105 font-bold shadow-lg shadow-primary/20"
            >
              <Phone className="h-4 w-4" />
              612 45 28 75
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
