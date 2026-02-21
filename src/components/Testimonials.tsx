
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Ruiz",
    role: "Vendido BMW Serie 3 con embargo",
    text: "Tenía un embargo administrativo que no me dejaba dormir. En FreeCoche gestionaron todo en menos de una semana. El trato fue excepcional y recibí mi dinero íntegro el mismo día del traspaso."
  },
  {
    name: "Elena Martínez",
    role: "Audi A4 con Reserva de Dominio",
    text: "Ningún concesionario quería mi coche porque tenía una deuda con la financiera. Ellos se encargaron de pagarla y me quedé con la diferencia. Un respiro total."
  },
  {
    name: "Jordi Sanchís",
    role: "Mercedes con deudas de seguridad social",
    text: "Servicio rápido y directo. El formulario me dio una estimación justa y el pago fue al instante. Los mejores en este tipo de gestiones."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary">Opiniones de nuestros clientes</h2>
          <p className="text-xl text-slate-600">Más de <span className="text-primary-dark font-bold">500 coches</span> comprados el último año con total garantía.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <Quote className="absolute top-8 right-8 h-10 w-10 text-primary opacity-10" />
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">"{t.text}"</p>
              <div>
                <h5 className="font-bold text-secondary text-xl">{t.name}</h5>
                <p className="text-sm text-primary-dark font-semibold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
