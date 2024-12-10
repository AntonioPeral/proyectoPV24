"use client";

import React from "react";

export default function Sidebar() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-start px-6 py-8">
      <div className="flex items-center mb-8 space-x-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
          L·P
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Nombre del usuario</h1>
          <button className="text-blue-500 text-sm hover:underline">Tu perfil &gt;</button>
        </div>
      </div>
      <nav className="w-full space-y-6">
        <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-2 rounded-lg w-full">
          <span>🏠</span>
          <span>Inicio</span>
        </button>
        <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-2 rounded-lg w-full">
          <span>🔔</span>
          <span>Notificaciones</span>
        </button>
        <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-2 rounded-lg w-full">
          <span>❓</span>
          <span>Ayuda</span>
        </button>
        <button className="flex items-center space-x-4 text-gray-700 hover:bg-gray-200 p-2 rounded-lg w-full">
          <span>🚪</span>
          <span>Salir</span>
        </button>
      </nav>
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
}
