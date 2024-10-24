"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Importamos el hook de enrutamiento
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function CustomPage() {
  const router = useRouter();

  const handleNextClick = () => {
    // Lógica para el siguiente paso
  };

  const handleForgotPasswordClick = () => {
    // Redirige a la página "contraseña"
    router.push("/contrasena");
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
        <Button onClick={handleNextClick} className="w-full max-w-xs mb-4">
          Siguiente
        </Button>

        {/* Botón ¿Olvidaste Contraseña? */}
        <Button
          variant="link"
          onClick={handleForgotPasswordClick}
          className="text-blue-500"
        >
          ¿Olvidaste Contraseña?
        </Button>
      </div>
    </div>
  );
}
