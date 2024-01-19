import "./App.css";
import React from "react";
//impotar modulos de firebase
import appFirebase from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import firebase from "firebase/app";
//importar componentes
import Login from "./components/Pages/Login/Login";
import Frutas from "./components/Pages/Frutas/Frutas";
import Signup from "./components/Pages/Signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const auth = getAuth(appFirebase);

function App() {
  //Estado de usuario
  const [firebaseUser, setFirebaseUser] = React.useState(null);
  //Verificar si el usuario esta logueado
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setFirebaseUser(user);
    } else {
      setFirebaseUser(null);
    }
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              firebaseUser !== null ? <Frutas user={firebaseUser} /> : <Login />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/frutas"
            element={
              firebaseUser !== null ? <Frutas user={firebaseUser} /> : <Login />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
