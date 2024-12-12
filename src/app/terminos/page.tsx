"use client";

import React from "react";

const TerminosCondiciones: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Header */}
      <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Términos y Condiciones
        </h1>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 space-y-4 text-gray-800">
        <h2 className="text-xl font-semibold">Introducción</h2>
        <p>
          Bienvenido a <strong>Bunid</strong>. Estos términos y condiciones
          rigen el uso de nuestro sitio web y la relación entre usted como
          usuario y nosotros como proveedor. Al acceder o utilizar este sitio,
          usted acepta cumplir con estos términos.
        </p>

        <h2 className="text-xl font-semibold">Uso del Sitio</h2>
        <p>Al utilizar este sitio, usted garantiza que:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Tiene al menos 18 años de edad o cuenta con el consentimiento de un
            tutor legal.
          </li>
          <li>
            No utilizará el sitio para actividades ilícitas o no autorizadas.
          </li>
          <li>
            Proporcionará información veraz y actualizada al registrarse o
            realizar compras.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Propiedad Intelectual</h2>
        <p>
          Todo el contenido disponible en este sitio, incluyendo texto,
          imágenes, logotipos, y gráficos, es propiedad de{" "}
          <strong>Bunid</strong> o de terceros autorizados. Está prohibido
          reproducir, distribuir o utilizar dicho contenido sin autorización
          previa.
        </p>

        <h2 className="text-xl font-semibold">Política de Devoluciones</h2>
        <p>
          Ofrecemos devoluciones dentro de los primeros 30 días después de la
          compra, siempre que el producto esté en condiciones originales.
          Consulte nuestra{" "}
          <a href="/politica-devoluciones" className="text-blue-500 underline">
            política de devoluciones
          </a>{" "}
          para más detalles.
        </p>

        <h2 className="text-xl font-semibold">Limitación de Responsabilidad</h2>
        <p>
          No seremos responsables de daños directos, indirectos, incidentales o
          consecuentes derivados del uso o imposibilidad de uso de este sitio,
          incluso si hemos sido informados de la posibilidad de tales daños.
        </p>

        <h2 className="text-xl font-semibold">
          Modificaciones de los Términos
        </h2>
        <p>
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Las modificaciones serán efectivas una vez
          publicadas en este sitio web. Le recomendamos revisar esta página
          regularmente.
        </p>

        <h2 className="text-xl font-semibold">Contacto</h2>
        <p>
          Si tiene alguna pregunta o inquietud sobre estos términos y
          condiciones, puede contactarnos en:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Email: <strong>contacto@bunid.com</strong>
          </li>
          <li>
            Teléfono: <strong>[NÚMERO DE CONTACTO]</strong>
          </li>
          <li>
            Dirección: <strong>[DIRECCIÓN FÍSICA]</strong>
          </li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto p-4 bg-white shadow-md text-center text-gray-600">
        &copy; {new Date().getFullYear()} Bunid. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default TerminosCondiciones;
