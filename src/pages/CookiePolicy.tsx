
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 pt-40 pb-20">
        <h1 className="text-4xl font-extrabold text-secondary mb-8">Política de Cookies</h1>
        
        <div className="space-y-8 text-slate-600 leading-relaxed bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-slate-100">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño archivo de texto que se descarga en su equipo cuando accede a determinadas páginas web. 
              Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de 
              navegación de un usuario o de su equipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">2. ¿Qué tipos de cookies utiliza este sitio web?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen.</li>
              <li><strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.</li>
              <li><strong>Cookies de análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de nuestra web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">3. Cómo desactivar las cookies</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones 
              del navegador instalado en su ordenador. En la mayoría de los navegadores web se ofrece la posibilidad de permitir, 
              bloquear o eliminar las cookies instaladas en su equipo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-4">4. Cookies de terceros</h2>
            <p>
              Este sitio web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web. 
              En particular, utilizamos Google Analytics para nuestras estadísticas.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
