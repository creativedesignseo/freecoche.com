
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-secondary mb-8">Política de Privacidad</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de sus datos personales es FreeCoche.com, con domicilio en Madrid, España. 
              Para cualquier consulta relacionada con la privacidad, puede contactarnos en info@freecoche.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Finalidad del Tratamiento</h2>
            <p>
              Sus datos personales serán tratados exclusivamente para gestionar su solicitud de tasación de vehículo y, en su caso, 
              coordinar la compra del mismo. No utilizaremos sus datos para fines publicitarios sin su previo consentimiento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Base Jurídica</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento que nos otorga al rellenar el formulario de contacto 
              o tasación, necesario para la ejecución de medidas precontractuales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Plazo de Conservación</h2>
            <p>
              Conservaremos sus datos durante el tiempo estrictamente necesario para cumplir con la finalidad prevista y, en todo caso, 
              durante los plazos legales establecidos por la normativa aplicable (generalmente hasta 5 años para cumplir obligaciones fiscales y legales).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Derechos del Usuario</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, suprimir, limitar u oponerse al tratamiento de sus datos, así como a la portabilidad 
              de los mismos, enviando un correo electrónico a info@freecoche.com adjuntando copia de documento oficial de identidad.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
