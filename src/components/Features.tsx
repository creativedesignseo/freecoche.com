
import { ClipboardList, Calculator, HandCoins } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-primary-dark" />,
    title: "Envía tus datos",
    description: "Rellena nuestro formulario rápido con los detalles de tu vehículo y el tipo de carga o embargo."
  },
  {
    icon: <Calculator className="h-10 w-10 text-primary-dark" />,
    title: "Tasación Gratuita",
    description: "Nuestros expertos analizan el mercado y la situación legal para ofrecerte el precio máximo real."
  },
  {
    icon: <HandCoins className="h-10 w-10 text-primary-dark" />,
    title: "Venta y Pago",
    description: "Si aceptas, nos encargamos de todo el papeleo legal y recibes tu dinero al instante."
  }
];

const Features = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-sm font-bold text-primary-dark uppercase tracking-[0.2em] mb-4">Proceso Transparente</h2>
        <h3 className="text-4xl lg:text-5xl font-extrabold text-secondary">Vende tu coche en 3 sencillos pasos</h3>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all duration-300">
              <div className="mb-8 p-4 rounded-2xl bg-white w-fit shadow-md group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-secondary mb-4">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
