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
import { loginService } from "./services/login.service";

const auth = getAuth(appFirebase);

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setFirebaseUser(user);
    } else {
      setFirebaseUser(null);
    }
  });

  return (
    <>
      <div>
        {firebaseUser !== null ? <Frutas user={firebaseUser} /> : <Login />}
      </div>
    </>
  );
}

export default App;
