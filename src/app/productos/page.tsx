"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const productsData: Product[] = [
  { id: 1, name: "Playera Negra", price: 150, image: "/images/playera.jpg" },
  { id: 2, name: "Vestido Azul", price: 250, image: "/images/vestido.jpg" },
  { id: 3, name: "Tenis Adidas", price: 350, image: "/images/tenis.jpg" },
  { id: 4, name: "Zapatillas Plateadas", price: 450, image: "/images/zapatillas.jpg" },
  { id: 5, name: "Sombrero", price: 120, image: "/images/sombrero.jpg" },
  { id: 6, name: "Bolsa de Mano", price: 300, image: "/images/bolsa.jpg" },
  { id: 7, name: "Reloj Deportivo", price: 550, image: "/images/reloj.jpg" },
  { id: 8, name: "Camisa Blanca", price: 200, image: "/images/camisa.jpg" },
  
];

export default function Tienda() {
  const [search, setSearch] = useState<string>("");

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Tienda</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos..."
            className="border border-gray-300 rounded px-4 py-2 w-64"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Buscar
          </button>
        </div>

        {/* Botón de compras */}
        <Link href="/compras">
          <div className="text-gray-600 cursor-pointer">🛒 Compras</div>
        </Link>
      </header>

      {/* Productos */}
      <main className="py-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
                <p className="mt-2 text-gray-700 font-semibold">{product.name}</p>
                <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  Añadir al carrito
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No se encontraron productos.
            </p>
          )}
        </div>
      </main>
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
}
