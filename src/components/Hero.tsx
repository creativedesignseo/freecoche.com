
import MultiStepForm from './MultiStepForm';
import { ShieldCheck, Zap, Clock, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="tasacion" className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Background Decor & Image */}
      <div className="absolute top-0 right-0 w-3/4 h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-50/10 via-slate-50/50 to-slate-50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2083" 
          alt="Coche profesional" 
          className="h-full w-full object-cover opacity-60 mix-blend-multiply grayscale-[20%]"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform origin-top-right -z-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-dark font-bold text-sm">
              <Zap className="h-4 w-4" />
              <span>Tasación inmediata en 2 minutos</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-secondary leading-tight">
              Vendemos tu coche con <span className="text-primary-dark italic">embargo</span> al mejor precio.
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              No dejes que las cargas legales te detengan. Compramos coches con embargos, reservas de dominio o deudas pendientes. Pago al contado y gestión profesional.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-emerald-500" />
                <span className="font-semibold text-secondary">Seguridad 100%</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-emerald-500" />
                <span className="font-semibold text-secondary">Liquidación rápida</span>
              </div>
            </div>

            <div className="pt-4">
              <a 
                id="btn-whatsapp-hero"
                href="https://wa.me/34612452875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl shadow-green-500/20"
              >
                <Phone className="h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                Calcula tu tasación gratis
              </h2>
              <MultiStepForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
