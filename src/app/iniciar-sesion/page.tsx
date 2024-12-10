"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function CustomPage() {
  const router = useRouter();

  const handleNextClick = () => {
    // Redirige a la página "Buscando" al hacer clic en "Ingresar"
    router.push("/buscando");
  };

  const handleForgotPasswordClick = () => {
    // Redirige a la página "contraseña"
    router.push("/contrasena");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      {/* Imagen principal centrada */}
      <Image
        src="/images/image.jpg"
        alt="Imagen Logo"
        width={400}
        height={450}
        className="mx-auto mb-4"
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

        <Input placeholder="Contraseña" className="mb-4 w-full max-w-xs" />

        <Button onClick={handleNextClick} className="w-full max-w-xs mb-4">
          Ingresar
        </Button>

        {/* Botón ¿Olvidaste Contraseña? */}
        <Button
          variant="link"
          onClick={handleForgotPasswordClick}
          className="text-blue-500"
        >
          ¿Olvidaste tu Contraseña?
        </Button>
      </div>
     
     
      <footer className="mt-auto p-4 w-full flex justify-center space-x-4 bg-white border-t">
        <button className="text-gray-600">Aviso de privacidad</button>
        <button className="text-gray-600">Términos y condiciones</button>
        <button className="text-gray-600">Acerca de</button>
      </footer>
    </div>
  );
}
