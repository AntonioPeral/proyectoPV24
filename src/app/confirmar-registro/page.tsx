import React from "react";
import "./page.css";

const Page = () => {
  return (
    <div className="container">
      <p className="message">
        Pulsa el enlace en el correo electrónico que te hemos enviado para
        confirmar tu dirección e-mail y validar tu cuenta. Si necesitas corregir
        o cambiar de dirección selecciona la opción correspondiente.
      </p>
      <input
        type="email"
        placeholder="Dirección e-mail"
        className="emailInput"
      />
      <button className="button">Volver a enviar el correo</button>
      <button className="button">Cambiar la dirección de correo</button>
    </div>
  );
};

export default Page;
