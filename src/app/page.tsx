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
    router.push("/iniciar"); // Redirige a la página de iniciar sesión
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Logo principal */}
      <Image
        src="/images/image.jpg" // Ruta correcta para acceder desde public/
        alt="Logo principal"
        width={400}
        height={300}
        className="mx-auto"
      />
      <h1>Bienvenido a Bazar Unid</h1>

      {/* Botones de acción */}
      <div className="flex justify-between space-x-4 mt-4 w-full px-8">
        <Button className="w-1/3 ml-0" onClick={handleLoginClick}>
          Iniciar sesión
        </Button>
        <Button
          variant="outline"
          className="w-1/3 ml-auto"
          onClick={handleRegisterClick}
        >
          Registrarse
        </Button>
      </div>

      {/* Logos adicionales */}
      <div className="flex justify-start gap-4 mt-6 w-full px-8">
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
          alt="Logo 3"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
