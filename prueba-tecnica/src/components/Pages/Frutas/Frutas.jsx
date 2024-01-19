import React from "react";
import { loginService } from "../../../services/login.service";
import { frutasService } from "../../../services/frutas.service";

const Frutas = ({ user }) => {
  const cerrarSesion = () => {
    loginService.logout();
  };
  const [frutas, setFrutas] = React.useState([]);

  React.useEffect(() => {
    frutasService.getFrutas().then((data) => {
      setFrutas(data);
    });
  }, []);

  return (
    <div>
      Frutas {user.email}
      <button onClick={cerrarSesion}>Cerrar sesion</button>
      {frutas.map((fruta) => (
        <div id={fruta.id}>
          <h3>{fruta.nombre}</h3>
          <img src={fruta.poster} alt={fruta.nombre} />
        </div>
      ))}
    </div>
  );
};

export default Frutas;
