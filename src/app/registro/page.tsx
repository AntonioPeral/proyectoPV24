"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Registro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [codigoID, setCodigoID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Contenedor principal dividido en dos columnas */}
      <div className="flex w-4/5 max-w-5xl bg-white rounded-lg shadow-lg">
        {/* Columna izquierda - Formulario */}
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">Registro de Usuario</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="username"
              >
                Nombre de Usuario
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Correo Institucional
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="codigoID"
              >
                Código ID
              </label>
              <input
                type="text"
                id="codigoID"
                value={codigoID}
                onChange={(e) => setCodigoID(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 mt-4"
            >
              Confirmar
            </button>
          </form>
        </div>

        {/* Columna derecha - Logo y Captcha */}
        <div className="w-1/2 flex flex-col items-center justify-center p-8 space-y-8">
          <div className="flex items-center justify-center">
            <Image
              src="/images/image.jpg"
              alt="Logo Bazar UNID"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-500">
            Captcha
          </button>
        </div>
      </div>
    </div>
  );
}
