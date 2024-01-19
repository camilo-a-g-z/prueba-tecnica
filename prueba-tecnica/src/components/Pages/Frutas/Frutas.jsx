import React from "react";
import { loginService } from "../../../services/login.service";
import { frutasService } from "../../../services/frutas.service";
import "./Frutas.css";

const Frutas = ({ user }) => {
  const cerrarSesion = () => {
    loginService.logout();
  };
  const [frutas, setFrutas] = React.useState([]);
  //Almacenar las frutas en el estado y mostrarlas en la vista
  React.useEffect(() => {
    frutasService.getFrutas().then((data) => {
      setFrutas(data);
    });
  }, []);

  return (
    <div className="body">
      <div className="title">Bienvenido {user.email}</div>
      <button onClick={cerrarSesion} className="boton">
        Cerrar sesion
      </button>
      <div className="container">
        {frutas.map((fruta) => (
          <div className="cards">
            <div className="title">
              <h1>{fruta.nombre}</h1>
            </div>
            <div className="image">
              <img src={fruta.poster} alt={fruta.nombre} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frutas;
