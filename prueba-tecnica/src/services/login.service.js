import appFirebase from "../credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const auth = getAuth(appFirebase);

export const loginService = {
  login: async (email, password) => {
    //Se inicia sesion con el usuario
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      window.alert("Usuario o contraseña incorrectos");
      return error;
    }
  },
  authState: async () => {
    //Se obtiene el usuario actual
    try {
      const user = await auth.onAuthStateChanged((user) => {
        if (user) {
          return user;
        } else {
          return null;
        }
      });
      return user;
    } catch (error) {
      return error;
    }
  },
  register: async (email, password) => {
    try {
      //Se crea el usuario
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        window.alert("Usuario creado correctamente");
        // Signed in
        const user = userCredential.user;
        return user;
      });
      return user;
    } catch (error) {
      window.alert("Error al crear usuario");
      return error;
    }
  },

  logout: async () => {
    //Se cierra sesion
    try {
      const user = signOut(auth)
        .then(() => {
          console.log("sesion cerrada");
          //redireccionar a login
          window.location = "/";
        })
        .catch((error) => {
          window.alert("Error al cerrar sesión");
          console.log(error);
        });
      return user;
    } catch (error) {
      return error;
    }
  },
};
