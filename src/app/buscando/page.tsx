"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function Buscando() {
  const router = useRouter();

  const handleUserCenterClick = () => {
    router.push("/centrousuario");
  };

  const handleMoreProductsClick = () => {
    router.push("/productos"); // Redirige a la página de productos
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header */}
      <header className="flex items-center w-full p-4 bg-white shadow-md">
        <div className="mr-auto flex items-center space-x-4">
          {/* Imagen en la esquina superior izquierda */}
          <Image
            src="/images/image.jpg"
            alt="Logo"
            width={80}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center space-x-2 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Estoy Buscando..."
            className="border rounded w-full py-4 px-4"
          />
          <button className="p-2 text-gray-600">🔍</button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div
            className="text-gray-600 cursor-pointer hover:underline"
            onClick={handleUserCenterClick}
          >
            ≡ Centro de usuario
          </div>
          <div className="text-gray-600 cursor-pointer">🛒 Compras</div>
        </div>
      </header>

      {/* Código Postal */}
      <div className="my-4">
        <Input
          placeholder="Ingresa tu código postal"
          className="mb-4 w-full max-w-xs"
        />
      </div>

      {/* Sección de Productos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/playera.jpg"
            alt="Playera Negra"
            width={200}
            height={200}
            className="rounded-md"
          />
          <p className="mt-2 text-gray-700">Playera Negra</p>
          <span className="text-gray-900 font-semibold">$150.00</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/vestido.jpg"
            alt="Vestido Azul"
            width={200}
            height={200}
            className="rounded-md"
          />
          <p className="mt-2 text-gray-700">Vestido Azul Celeste</p>
          <span className="text-gray-900 font-semibold">$250.00</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/tenis.jpg"
            alt="Tenis Adidas"
            width={200}
            height={200}
            className="rounded-md"
          />
          <p className="mt-2 text-gray-700">Tenis Adidas</p>
          <span className="text-gray-900 font-semibold">$350.00</span>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
          <Image
            src="/images/zapatillas.jpg"
            alt="Zapatillas Plateadas"
            width={200}
            height={200}
            className="rounded-md"
          />
          <p className="mt-2 text-gray-700">Zapatillas Plateadas</p>
          <span className="text-gray-900 font-semibold">$450.00</span>
        </div>
      </div>

      {/* Botón "Más productos" */}
      <div className="mt-6">
        <button
          onClick={handleMoreProductsClick}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Más productos
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
}



