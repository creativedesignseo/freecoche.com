
import { Car, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/freecoche.svg" alt="FreeCoche.com" className="h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-slate-600 hover:text-primary transition-colors font-medium">Cómo funciona</a>
            <a href="#faq" className="text-slate-600 hover:text-primary transition-colors font-medium">Preguntas frecuentes</a>
            <a 
              href="tel:+34900000000" 
              className="flex items-center gap-2 bg-primary text-secondary px-6 py-2.5 rounded-full hover:bg-primary-dark hover:text-white transition-all transform hover:scale-105 font-bold shadow-lg shadow-primary/20"
            >
              <Phone className="h-4 w-4" />
              Llamar gratis
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
