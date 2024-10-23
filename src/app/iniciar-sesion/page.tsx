"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"; // Asegúrate de que este componente Button esté disponible en tu proyecto
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function CustomPage() {
  const handleLoginClick = () => {
    // Lógica para iniciar sesión
  };

  const handleInstitutionalEmailClick = () => {
    // Lógica para correo institucional
  };

  const handleNextClick = () => {
    // Lógica para el siguiente paso
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      {/* Imagen principal centrada */}
      <Image
        src="/images/image.jpg" // Reemplaza con la ruta de tu imagen
        alt="Imagen Logo"
        width={400}
        height={450}
        className="mx-auto mb-4" // Añade margen inferior para separar de otros elementos
      />

      <Avatar className="w-40 h-40 mb-4">
        <AvatarImage src="https://www.powermas.com.pe/Img/PowerMas_User_03.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <h1 className="text-center mb-4">Iniciar Sesión</h1>
      {/* Formulario */}
      <div className="flex flex-col items-center w-full px-4">
        <Input
          placeholder="Correo Institucional"
          className="mb-4 w-full max-w-xs"
        />

        {/* Botón Siguiente */}
        <Button onClick={handleNextClick} className="w-full max-w-xs">
          Siguiente
        </Button>
      </div>
    </div>
  );
}
