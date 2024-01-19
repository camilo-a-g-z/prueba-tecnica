import React from "react";

import { loginService } from "../../../services/login.service";

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
    <div>
      <h1>Signup</h1>
      <form onSubmit={functionAuth}>
        <input type="text" placeholder="nombre" id="name" />
        <input type="text" placeholder="apellido" id="lastName" />
        <input type="text" placeholder="correo" id="email" />
        <input type="text" placeholder="password" id="password" />
        <button>Registrarse</button>
      </form>
      <h1>Iniciar sesion</h1>
      <a href="/">Iniciar sesion</a>
    </div>
  );
};

export default Signup;
