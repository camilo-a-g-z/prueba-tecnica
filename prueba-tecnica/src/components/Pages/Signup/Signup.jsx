import React from "react";

import { loginService } from "../../../services/login.service";
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = React.useState(false);
  const functionAuth = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const user = await loginService.register(email, password);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body">
      <form onSubmit={functionAuth}>
        <h1 className="mainTitle">Registrate</h1>
        <div className="form">
          <div className="grupo">
            <input type="text" placeholder="Nombre" id="name" />
          </div>
          <div className="grupo">
            <input type="text" placeholder="Apellido" id="lastName" />
          </div>
          <div className="grupo">
            <input type="text" placeholder="Correo" id="email" />
          </div>
          <div className="grupo">
            <input type="password" placeholder="Contraseña" id="password" />
          </div>
          <button className="boton">Registrarse</button>
        </div>
      </form>
      <h1>¿Ya estas registrado?</h1>
      <a className="link" href="/">
        Iniciar sesion
      </a>
    </div>
  );
};

export default Signup;
