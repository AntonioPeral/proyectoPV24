"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Hook para la navegación

export default function Login() {
  const router = useRouter(); // Instancia del router

  const handleRegisterClick = () => {
    router.push("/registro"); // Redirige a la página de registro
  };

  const handleLoginClick = () => {
    router.push("/iniciar-sesion"); // Redirige a la página de iniciar sesión
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      {" "}
      {/* Fondo restaurado */}
      {/* Logo principal */}
      <Image
        src="/images/image.jpg" // Ruta correcta para acceder desde public/
        alt="Logo principal"
        width={400}
        height={300}
        className="mx-auto mb-6" // Margen inferior para separar el logo del título
      />
      <h1 className="text-2xl font-bold mb-4 text-center">
        Bienvenido a Bazar Unid
      </h1>
      {/* Botones de acción */}
      <div className="flex justify-center space-x-4 mt-4 w-full px-8">
        <Button className="w-1/4" onClick={handleLoginClick}>
          Iniciar sesión
        </Button>
        <Button
          variant="outline"
          className="w-1/4"
          onClick={handleRegisterClick}
        >
          Registrarse
        </Button>
      </div>
      {/* Logos adicionales */}
      <div className="flex justify-center gap-6 mt-8 w-full px-8">
        <Image
          src="/images/logotwiter.png" // Ruta corregida
          alt="Logo Twitter"
          width={40}
          height={40}
        />
        <Image
          src="/images/logofacebook.webp" // Ruta corregida
          alt="Logo Facebook"
          width={40}
          height={40}
        />
        <Image
          src="/images/logoinstagram.webp" // Ruta corregida
          alt="Logo Instagram"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
