
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-secondary mb-8">Términos del Servicio</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar el sitio web FreeCoche.com, usted acepta cumplir y estar sujeto a estos Términos del Servicio. 
              Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. Descripción del Servicio</h2>
            <p>
              FreeCoche.com proporciona una plataforma para la tasación gratuita de vehículos con cargas, embargos o deudas, 
              y la posible intermediación o compra directa de los mismos. La tasación proporcionada a través del formulario 
              web es orientativa y está sujeta a revisión física y legal del vehículo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Responsabilidad del Usuario</h2>
            <p>
              El usuario se compromete a proporcionar información veraz y actualizada sobre el estado y las cargas del vehículo. 
              Cualquier falsedad en los datos proporcionados podrá invalidar cualquier oferta o acuerdo posterior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Limitación de Responsabilidad</h2>
            <p>
              FreeCoche.com no garantiza que la tasación online sea el precio final de compra. Nos reservamos el derecho de rechazar 
              cualquier operación tras el análisis detallado del expediente administrativo y el estado del vehículo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">5. Modificaciones de los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor 
              inmediatamente después de su publicación en el sitio web.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
