
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-700 pb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/logo-freecoche.svg" alt="FreeCoche.com" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Líderes nacionales en la gestión y compra de vehículos con cargas legales. Transparencia, legalidad y rapidez garantizadas.
            </p>
          </div>
          
          <div>
            <h6 className="text-lg font-bold mb-6">Enlaces Rápidos</h6>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tasación Online</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-lg font-bold mb-6">Legal</h6>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos del Servicio</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h6 className="text-lg font-bold mb-6">Contacto Directo</h6>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <span className="font-bold">900 000 000</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <span>info@freecoche.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <span>Madrid, España</span>
            </div>
          </div>
        </div>
        
        <div className="text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} FreeCoche.com - Todos los derechos reservados. Diseño optimizado para conversión.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
