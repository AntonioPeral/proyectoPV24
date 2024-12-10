"use client";

import React from "react";

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Header */}
      <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Aviso de Privacidad</h1>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 space-y-4 text-gray-800">
        <h2 className="text-xl font-semibold">Responsable de los Datos Personales</h2>
        <p>
          La tienda de bazar, denominada <strong>"Tu Bazar de Confianza"</strong>,
          ubicada en [DIRECCIÓN DE LA TIENDA], es responsable del tratamiento de
          sus datos personales conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
        </p>

        <h2 className="text-xl font-semibold">Finalidades del Tratamiento de Datos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Proveer los productos y servicios que ha solicitado, incluyendo la gestión de pagos y entregas.
          </li>
          <li>
            Informarle sobre promociones, ofertas especiales o productos nuevos disponibles en nuestra tienda.
          </li>
          <li>
            Cumplir con obligaciones legales aplicables.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Datos Personales Recabados</h2>
        <p>
          Los datos personales que recabamos incluyen, pero no se limitan a:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nombre completo</li>
          <li>Teléfono de contacto</li>
          <li>Correo electrónico</li>
          <li>Dirección de envío</li>
          <li>Datos de facturación (en caso de requerir factura)</li>
        </ul>

        <h2 className="text-xl font-semibold">Protección de sus Datos</h2>
        <p>
          Implementamos medidas de seguridad físicas, administrativas y
          tecnológicas para garantizar la protección de sus datos personales
          contra accesos no autorizados, pérdida o mal uso.
        </p>

        <h2 className="text-xl font-semibold">Derechos ARCO</h2>
        <p>
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al
          tratamiento de sus datos personales. Para ejercer estos derechos, por
          favor contáctenos en el correo electrónico{" "}
          <strong>contacto@tubazar.com</strong> o al teléfono [NÚMERO DE CONTACTO].
        </p>

        <h2 className="text-xl font-semibold">Cambios en el Aviso de Privacidad</h2>
        <p>
          Este aviso de privacidad puede ser modificado en cualquier momento
          para cumplir con actualizaciones legales o cambios en nuestras
          políticas internas. Le notificaremos mediante nuestra página web en caso de realizar modificaciones.
        </p>

        <h2 className="text-xl font-semibold">Contacto</h2>
        <p>
          Si tiene dudas sobre este aviso de privacidad, puede comunicarse con
          nosotros en el correo electrónico{" "}
          <strong>contacto@tubazar.com</strong> o visitarnos en nuestra tienda
          física en [DIRECCIÓN DE LA TIENDA].
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto p-4 bg-white shadow-md text-center text-gray-600">
        &copy; {new Date().getFullYear()} Tu Bazar de Confianza. Todos los derechos reservados.
      </footer>
    </div>
  );
}
