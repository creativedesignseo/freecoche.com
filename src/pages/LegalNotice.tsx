
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-secondary mb-8">Aviso Legal</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Datos Identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información 
              y Comercio Electrónico, se informa que el titular del sitio web FreeCoche.com es un prestador de servicios 
              con residencia en Madrid, España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Condiciones de Uso</h2>
            <p>
              El acceso al sitio web atribuye la condición de Usuario, implicando la aceptación plena y sin reservas de todas y cada una 
              de las disposiciones incluidas en este Aviso Legal. El sitio web proporciona información sobre servicios de tasación 
              y compra-venta de vehículos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Propiedad Intelectual</h2>
            <p>
              Los derechos de propiedad intelectual del contenido de este sitio web, incluyendo su diseño gráfico y códigos, 
              son titularidad de FreeCoche.com. Queda prohibida su reproducción, distribución o comunicación pública sin autorización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Exención de Responsabilidad</h2>
            <p>
              FreeCoche.com no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, 
              a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión 
              de virus o programas maliciosos en los contenidos, a pesar de haber adoptado las medidas tecnológicas necesarias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Legislación y Jurisdicción</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web será de aplicación 
              la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de 
              todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Madrid.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
