"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCart: CartItem[] = [
  { id: 1, name: "Playera Negra", price: 150, quantity: 2, image: "/images/playera.jpg" },
  { id: 2, name: "Vestido Azul", price: 250, quantity: 1, image: "/images/vestido.jpg" },
  { id: 3, name: "Tenis Adidas", price: 350, quantity: 1, image: "/images/tenis.jpg" },
];

export default function Carrito() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Carrito de Compras</h1>
        <div className="text-gray-600 cursor-pointer">🛒 Volver a la tienda</div>
      </header>

      {/* Contenido del carrito */}
      <main className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-6">
        {cartItems.length > 0 ? (
          <div className="flex flex-col space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)} c/u</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-bold text-gray-800">Total:</h2>
              <p className="text-2xl font-semibold text-gray-900">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>

            {/* Botón de proceder */}
            <button className="w-full py-3 mt-4 bg-blue-500 text-white text-lg font-semibold rounded hover:bg-blue-600">
              Proceder al Pago
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-600">Tu carrito está vacío.</p>
        )}
      </main>
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
}
