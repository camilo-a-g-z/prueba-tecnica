import React from "react";

import { loginService } from "../../../services/login.service";

const Login = () => {
  const Login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const user = await loginService.login(email, password);
      window.location.href = "/";
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={Login}>
        <input type="text" placeholder="correo" id="email" />
        <input type="text" placeholder="password" id="password" />
        <button>Iniciar sesion</button>
      </form>
      <h1>Registrarse</h1>
      <a href="/signup">Registrarse</a>
    </div>
  );
};

export default Login;
