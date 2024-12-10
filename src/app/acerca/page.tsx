"use client";

import React from "react";

const AcercaDe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Header */}
      <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Acerca de Nosotros</h1>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 space-y-4 text-gray-800">
        <h2 className="text-xl font-semibold">Nuestra Historia</h2>
        <p>
          <strong>Bunid</strong> nació con el objetivo de ofrecer productos 
          de calidad a precios accesibles para toda la comunidad. Desde nuestro inicio en 
          [AÑO DE FUNDACIÓN], nos hemos comprometido a brindar una experiencia de compra única, 
          priorizando la satisfacción de nuestros clientes.
        </p>

        <h2 className="text-xl font-semibold">Nuestra Misión</h2>
        <p>
          Queremos ser la tienda preferida de nuestra comunidad, ofreciendo una variedad de productos que 
          combinen calidad, estilo y precio. Nos esforzamos cada día para innovar y proporcionar una 
          experiencia de compra amigable y confiable.
        </p>

        <h2 className="text-xl font-semibold">Nuestros Valores</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Calidad:</strong> Garantizamos productos duraderos y confiables.</li>
          <li><strong>Compromiso:</strong> Estamos aquí para ti en cada paso del proceso de compra.</li>
          <li><strong>Confianza:</strong> Nos esforzamos por construir relaciones a largo plazo con nuestros clientes.</li>
        </ul>

        <h2 className="text-xl font-semibold">Equipo</h2>
        <p>
          Contamos con un equipo apasionado y comprometido con la excelencia. Cada miembro de nuestro bazar 
          trabaja arduamente para garantizar que tengas una experiencia excepcional.
        </p>

        <h2 className="text-xl font-semibold">Contáctanos</h2>
        <p>
          ¿Tienes preguntas o comentarios? Nos encantaría escucharte. Puedes ponerte en contacto con nosotros 
          a través de los siguientes canales:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email: <strong>contacto@bunidr.com</strong></li>
          <li>Teléfono: <strong>[NÚMERO DE CONTACTO]</strong></li>
          <li>Dirección: <strong>[DIRECCIÓN FÍSICA]</strong></li>
        </ul>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto p-4 bg-white shadow-md text-center text-gray-600">
        &copy; {new Date().getFullYear()} Bunid. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default AcercaDe;
