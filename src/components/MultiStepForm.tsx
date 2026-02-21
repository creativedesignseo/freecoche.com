import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils/cn';

const formSchema = z.object({
  // Paso 1: Vehículo
  brand: z.string().min(2, "Introduce la marca"),
  model: z.string().min(1, "Introduce el modelo"),
  year: z.string().regex(/^\d{4}$/, "Año no válido (ej. 2020)"),
  kilometers: z.string().min(1, "Introduce los kilómetros"),
  
  // Paso 2: Detalles Carga
  chargeType: z.enum(['Embargo', 'Reserva de Dominio', 'Multas Pendientes', 'Otras Cargas']),
  chargeDescription: z.string().min(5, "Danos algunos detalles"),
  
  // Paso 3: Contacto
  fullName: z.string().min(3, "Introduce tu nombre completo"),
  email: z.string().email("Email no válido"),
  phone: z.string().min(9, "Teléfono no válido"),
});

type FormData = z.infer<typeof formSchema>;

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const nextStep = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) fields = ['brand', 'model', 'year', 'kilometers'];
    if (step === 2) fields = ['chargeType', 'chargeDescription'];
    
    const isValid = await trigger(fields);
    if (isValid) setStep((s) => s + 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Lead captured:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-600" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-secondary mb-4">¡Solicitud recibida!</h3>
        <p className="text-slate-600 text-lg">
          Estamos analizando tu caso. Un experto te contactará en menos de <span className="font-bold text-primary-dark italic">24 horas</span>.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* Step Indicator */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2 rounded-full" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-primary -z-10 -translate-y-1/2 rounded-full transition-all duration-300" 
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center font-bold transition-all duration-300",
              step >= i ? "bg-primary text-secondary shadow-lg shadow-primary/30" : "bg-slate-100 text-slate-400"
            )}
          >
            {i}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Marca</label>
                  <input {...register('brand')} placeholder="Ej: BMW" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.brand ? "border-red-500" : "border-slate-200")} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Modelo</label>
                  <input {...register('model')} placeholder="Ej: Serie 3" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.model ? "border-red-500" : "border-slate-200")} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Año</label>
                  <input {...register('year')} placeholder="Ej: 2018" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.year ? "border-red-500" : "border-slate-200")} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Kilómetros</label>
                  <input {...register('kilometers')} placeholder="Ej: 80.000" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.kilometers ? "border-red-500" : "border-slate-200")} />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Tipo de carga</label>
                <select {...register('chargeType')} className="form-input w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="Embargo">Embargo Judicial/Administrativo</option>
                  <option value="Reserva de Dominio">Reserva de Dominio</option>
                  <option value="Multas Pendientes">Multas Pendientes</option>
                  <option value="Otras Cargas">Otras Cargas / Deudas</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Detalles adicionales</label>
                <textarea 
                  {...register('chargeDescription')} 
                  rows={3} 
                  placeholder="Explica brevemente la situación..." 
                  className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.chargeDescription ? "border-red-500" : "border-slate-200")}
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Nombre completo</label>
                <input {...register('fullName')} placeholder="Tu nombre" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.fullName ? "border-red-500" : "border-slate-200")} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email</label>
                <input {...register('email')} placeholder="email@ejemplo.com" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.email ? "border-red-500" : "border-slate-200")} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase tracking-wider">Teléfono</label>
                <input {...register('phone')} placeholder="+34 600 000 000" className={cn("form-input w-full p-3 bg-slate-50 border rounded-xl outline-none focus:ring-2 focus:ring-primary/20", errors.phone ? "border-red-500" : "border-slate-200")} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 pt-4">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 flex items-center justify-center gap-2 py-4 px-6 border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-colors uppercase tracking-wider"
            >
              <ChevronLeft className="h-5 w-5" />
              Atrás
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-primary text-secondary font-bold rounded-2xl hover:bg-primary-dark hover:text-white transition-all shadow-xl shadow-primary/20 uppercase tracking-wider"
            >
              Siguiente
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="submit"
              className="flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 uppercase tracking-wider"
            >
              Tasación gratuita
            </button>
          )}
        </div>
        
        <p className="text-center text-xs text-slate-400">
          Tus datos están seguros. Cumplimos con la RGPD y protegemos tu privacidad.
        </p>
      </form>
    </div>
  );
};

export default MultiStepForm;
