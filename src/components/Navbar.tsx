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
              className="flex items-center gap-2 bg-slate-100 text-secondary px-5 py-2.5 rounded-full hover:bg-slate-200 transition-all font-bold"
            >
              <Phone className="h-4 w-4" />
              612 45 28 75
            </a>
            <a 
              id="btn-whatsapp-cta"
              href="https://wa.me/34612452875"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full hover:bg-[#128C7E] transition-all transform hover:scale-105 font-bold shadow-lg shadow-green-500/20"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
