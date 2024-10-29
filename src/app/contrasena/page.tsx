"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation"; // Importa useRouter
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PasswordPage() {
  const [code, setCode] = useState(Array(6).fill("")); // Almacenamos un array para el código de 6 dígitos
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Referencias a los inputs
  const router = useRouter(); // Inicializa el router

  // Maneja el cambio en cada input
  const handleChange = (index: number, value: string) => {
    if (/^[0-9]$/.test(value)) { // Validamos que sea un número
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Mover el foco al siguiente input si el valor está lleno
      if (index < 5 && value) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Mover foco con Backspace
  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Mueve el foco al input anterior
    }
  };

  // Función para manejar el envío del código
  const handleSubmit = () => {
    const verificationCode = code.join(""); // Combina los 6 dígitos
    console.log("Código ingresado:", verificationCode);
    router.push("/confirmar-contrasena"); // Redirige a la página de reset
  };

  // Función para reenviar el código
  const handleResend = () => {
    console.log("Reenviar código de verificación");
    // Lógica para reenviar el código
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-white">
      {/* Título */}
      <h1 className="text-4xl font-bold text-center mb-4">Escribir Código</h1>
      
      {/* Subtítulo */}
      <p className="text-center mb-4 text-gray-600">
        Hemos enviado un código de seguridad al +55 6** ** 4201
      </p>
      
      {/* Botón Reenviar */}
      <Button onClick={handleResend} className="mb-4">
        Reenviar
      </Button>
      
      {/* Input de Código */}
      <div className="flex justify-center gap-2 mb-8">
        {code.map((digit, index) => (
          <Input
            key={index}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
            className="text-center text-2xl w-12 h-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        ))}
      </div>

      {/* Botón Continuar */}
      <Button onClick={handleSubmit} className="w-full max-w-xs">
        Continuar
      </Button>
    </div>
  );
}


  