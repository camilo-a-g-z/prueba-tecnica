import React from "react";
import { loginService } from "../../../services/login.service";

const Frutas = ({ user }) => {
  const cerrarSesion = () => {
    loginService.logout();
  };

  return (
    <div>
      Frutas {user.email}
      <button onClick={cerrarSesion}>Cerrar sesion</button>
    </div>
  );
};

export default Frutas;
