import React from "react";

const Signup = () => {
  const [user, setUser] = React.useState(false);
  return (
    <div>
      <h1>Signup</h1>
      <input type="text" placeholder="nombre" />
      <input type="text" placeholder="apellido" />
      <input type="text" placeholder="correo" />
      <input type="text" placeholder="password" />
      <button>Registrarse</button>
    </div>
  );
};

export default Signup;
