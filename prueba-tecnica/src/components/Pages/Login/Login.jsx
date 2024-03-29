import React from "react";

import { loginService } from "../../../services/login.service";
import "./Login.css";

const Login = () => {
  const Login = async (e) => {
    //Evitar que se recargue la pagina
    e.preventDefault();
    //Obtener los datos del formulario
    const email = e.target.email.value;
    const password = e.target.password.value;
    //Validar que los campos no esten vacios
    try {
      //Llamar al servicio de login y enviar los datos de login
      const user = await loginService.login(email, password);
      window.location.href = "/";
      console.log(user);
    } catch (error) {
      window.alert("Usuario o contraseña incorrectos");
    }
  };
  return (
    <div className="body">
      <form onSubmit={Login}>
        <h1 className="mainTitle">Iniciar sesión</h1>
        <div className="form">
          <div className="grupo">
            <input type="text" placeholder="Correo" id="email" />
          </div>
          <div className="grupo">
            <input type="password" placeholder="Contraseña" id="password" />
          </div>
          <button className="boton">Iniciar sesion</button>
        </div>
      </form>
      <div className="register">
        <h1>Registrate</h1>
        <a className="link" href="/signup">
          Registrate
        </a>
      </div>
    </div>
  );
};

export default Login;
