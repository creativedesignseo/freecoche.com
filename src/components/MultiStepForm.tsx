import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Send } from 'lucide-react';
import { cn } from '../utils/cn';

const formSchema = z.object({
  carDetails: z.string().min(5, "Introduce marca, modelo y año"),
  kilometers: z.string().min(1, "Introduce los kilómetros"),
  chargeType: z.enum([
    'Embargo', 
    'Precinto', 
    'Libre de cargas', 
    'Multas', 
    'Leasing', 
    'Financiado', 
    'Impago de Impuestos', 
    'Siniestrado', 
    'Con golpes', 
    'Averiado'
  ]),
  phone: z.string().min(9, "Teléfono no válido"),
  email: z.string().email("Email no válido"),
});

type FormData = z.infer<typeof formSchema>;

const MultiStepForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "tasacion-gratuita", ...data })
    })
    .then(() => {
      setSubmittedData(data);
      setIsSubmitted(true);
      
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          'event': 'form_submission_success',
          'form_name': 'tasacion-gratuita'
        });
      }
    })
    .catch(error => console.error("Error submitting form:", error));
  };

  if (isSubmitted) {
    const waMessage = encodeURIComponent(`Hola, me gustaría tasar mi coche: ${submittedData?.carDetails}. Tiene ${submittedData?.kilometers} km y su estado es: ${submittedData?.chargeType}. Mi teléfono es ${submittedData?.phone}.`);
    const waLink = `https://wa.me/34612452875?text=${waMessage}`;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 px-6"
      >
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-600" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-secondary mb-4">¡Solicitud recibida!</h3>
        <p className="text-slate-600 text-lg mb-8">
          Estamos analizando tu caso. Un experto te contactará en menos de <span className="font-bold text-primary-dark italic">24 horas</span>.
        </p>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">¿Quieres una respuesta más rápida?</p>
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl shadow-green-500/20 w-full justify-center"
          >
            <Phone className="h-5 w-5" />
            Contactar por WhatsApp ahora
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-4"
        name="tasacion-gratuita"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        {/* Anti-spam field for Netlify */}
        <input type="hidden" name="form-name" value="tasacion-gratuita" />
        <p className="hidden">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Detalles del Vehículo</label>
            <input 
              {...register('carDetails')} 
              placeholder="Marca / Modelo / Año" 
              className={cn(
                "w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary",
                errors.carDetails ? "border-red-500 bg-red-50/30" : "border-slate-200"
              )} 
            />
            {errors.carDetails && <p className="text-[10px] text-red-500 ml-1 font-bold italic">{errors.carDetails.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Kilometraje</label>
              <input 
                {...register('kilometers')} 
                placeholder="Ej: 120.000" 
                className={cn(
                  "w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary",
                  errors.kilometers ? "border-red-500 bg-red-50/30" : "border-slate-200"
                )} 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Cargas / Estado</label>
              <select 
                {...register('chargeType')} 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary appearance-none cursor-pointer"
              >
                <option value="Embargo">Embargo</option>
                <option value="Precinto">Precinto</option>
                <option value="Libre de cargas">Libre de cargas</option>
                <option value="Multas">Multas</option>
                <option value="Leasing">Leasing</option>
                <option value="Financiado">Financiado</option>
                <option value="Impago de Impuestos">Impago de Impuestos</option>
                <option value="Siniestrado">Siniestrado</option>
                <option value="Con golpes">Con golpes</option>
                <option value="Averiado">Averiado</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">WhatsApp / Teléfono</label>
              <input 
                {...register('phone')} 
                placeholder="600 000 000" 
                className={cn(
                  "w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary",
                  errors.phone ? "border-red-500 bg-red-50/30" : "border-slate-200"
                )} 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email</label>
              <input 
                {...register('email')} 
                placeholder="tu@email.com" 
                className={cn(
                  "w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-secondary",
                  errors.email ? "border-red-500 bg-red-50/30" : "border-slate-200"
                )} 
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full flex items-center justify-center gap-3 py-5 px-6 bg-primary text-secondary font-black rounded-3xl hover:bg-primary-dark hover:text-white transition-all shadow-xl shadow-primary/20 uppercase tracking-widest text-sm mt-4",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? "Enviando..." : "Solicitar Tasación Gratis"}
          <Send className="h-4 w-4" />
        </button>
        
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            Protegido por RGPD • Respuesta en &lt;24h
          </p>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
