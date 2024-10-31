"use client"

// pages/Buscando.js
import React from 'react';
import Image from 'next/image';

export default function buscando() {
  return (

    
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header */}
      <header className="flex items-center w-full p-4 bg-white shadow-md">
        <div className="mr-auto flex items-center space-x-4">
          <button className="p-2 text-gray-600">&#8592;</button>
          
        </div>
        <div className="flex items-center space-x-2 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Estoy Buscando..."
            className="border rounded w-full py-2 px-4"
          />
          <button className="p-2 text-gray-600">🔍</button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="text-gray-600 cursor-pointer">≡</div>
          <div className="text-gray-600 cursor-pointer">🛒</div>
        </div>
      </header>

      {/* Postal Code */}
      <div className="my-4">
        <span role="img" aria-label="location">
          📍
        </span>{' '}
        Ingresa tu código postal
      </div>

      {/* Main Content */}
      <main className="w-full max-w-4xl flex flex-col items-center space-y-8">
        <div className="w-full bg-white shadow-lg rounded p-8 border border-dashed text-center">
          Banner integrado de ofertas
        </div>
        <div className="w-full bg-white shadow-lg rounded p-8 border border-dashed text-center">
          Productos destacados
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
}
