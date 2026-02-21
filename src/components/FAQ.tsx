import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const faqs = [
  {
    question: "¿Se puede vender un coche con embargo?",
    answer: "Sí, es perfectamente legal vender un vehículo con embargo. Nosotros nos encargamos de liquidar la deuda con la administración correspondiente o descontarla del precio de compra para que la transacción sea 100% legal."
  },
  {
    question: "¿Qué pasa si tiene Reserva de Dominio?",
    answer: "La reserva de dominio impide el cambio de titularidad. Sin embargo, nosotros gestionamos la cancelación de la misma directamente con la financiera tras el pago de la deuda pendiente."
  },
  {
    question: "¿Compráis coches con deudas de seguridad social?",
    answer: "Sí, compramos coches con embargos de la Seguridad Social, Hacienda, Ayuntamientos o entidades bancarias."
  },
  {
    question: "¿En cuánto tiempo recibo mi dinero?",
    answer: "Una vez verificada la documentación y el estado del vehículo, el pago se realiza al instante mediante transferencia bancaria inmediata o cheque conformado."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary mb-6">Preguntas frecuentes</h2>
          <p className="text-xl text-slate-600">Resolvemos tus dudas sobre la venta de coches con cargas.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="h-6 w-6 text-primary-dark flex-shrink-0" />
                  <span className="text-lg font-bold text-secondary">{faq.question}</span>
                </div>
                <ChevronDown className={cn("h-6 w-6 text-slate-400 transition-transform duration-300", openIndex === index && "rotate-180")} />
              </button>
              
              <div className={cn(
                "px-6 pb-6 text-slate-600 leading-relaxed transition-all duration-300",
                openIndex === index ? "block opacity-100" : "hidden opacity-0"
              )}>
                <div className="pt-2 border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
