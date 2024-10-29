"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa el hook useRouter
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ResetPasswordPage: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter(); // Instancia del router

  // Maneja el envío del formulario
  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      console.log("Nueva contraseña establecida:", newPassword);
      // Aquí puedes manejar la lógica para actualizar la contraseña
      router.push("/iniciar-sesion"); // Redirige a la página de inicio de sesión
    } else {
      console.log("Las contraseñas no coinciden");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-white">
      <h1 className="text-4xl font-bold text-center mb-4">Nueva Contraseña</h1>

      {/* Input de Nueva Contraseña */}
      <div className="mb-10">
        <Input
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Nueva Contraseña"
          className="text-center text-2xl w-72"
        />
      </div>

      {/* Input de Confirmar Contraseña */}
      <div className="mb-10">
        <Input
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar Contraseña"
          className="text-center text-2xl w-72"
        />
      </div>

      {/* Botón de Enviar */}
      <Button onClick={handleSubmit} className="w-full max-w-xs">
        Confirmar
      </Button>
    </div>
  );
};

export default ResetPasswordPage;
