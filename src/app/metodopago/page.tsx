"use client";

import React, { useState } from "react";

const MetodosDePago: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);
  const [paymentType, setPaymentType] = useState("");
  const [details, setDetails] = useState("");

  const handleAddPaymentMethod = () => {
    if (!paymentType || !details) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setPaymentMethods([...paymentMethods, { paymentType, details }]);
    setPaymentType("");
    setDetails("");
  };

  const handleRemovePaymentMethod = (index: number) => {
    const updatedMethods = paymentMethods.filter((_, i) => i !== index);
    setPaymentMethods(updatedMethods);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      {/* Header */}
      <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Métodos de Pago</h1>
      </header>

      {/* Formulario */}
      <main className="max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Registrar un nuevo método de pago</h2>

        {/* Tipo de pago */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="paymentType" className="text-gray-700 font-medium">
            Tipo de Pago
          </label>
          <select
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Selecciona un tipo de pago
            </option>
            <option value="Tarjeta de Crédito/Débito">Tarjeta de Crédito/Débito</option>
            <option value="Depósito Bancario">Depósito Bancario</option>
            <option value="PayPal">PayPal</option>
            <option value="Transferencia Bancaria">Transferencia Bancaria</option>
          </select>
        </div>

        {/* Detalles del pago */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="details" className="text-gray-700 font-medium">
            Detalles
          </label>
          <input
            id="details"
            type="text"
            placeholder="Ingresa los detalles del método de pago"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón para agregar */}
        <button
          onClick={handleAddPaymentMethod}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Agregar Método de Pago
        </button>

        {/* Métodos de Pago Registrados */}
        {paymentMethods.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Métodos Registrados</h3>
            <ul className="space-y-4 mt-4">
              {paymentMethods.map((method, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded shadow"
                >
                  <div>
                    <p className="font-medium text-gray-800">{method.paymentType}</p>
                    <p className="text-gray-600">{method.details}</p>
                  </div>
                  <button
                    onClick={() => handleRemovePaymentMethod(index)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
};

export default MetodosDePago;
