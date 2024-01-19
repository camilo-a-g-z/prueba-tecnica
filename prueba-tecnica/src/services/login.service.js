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
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return user;
    } catch (error) {
      return error;
    }
  },
  authState: async () => {
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
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
      });
      return user;
    } catch (error) {
      return error;
    }
  },

  logout: async () => {
    try {
      const user = signOut(auth)
        .then(() => {
          console.log("sesion cerrada");
          //redireccionar a login
          window.location = "/";
        })
        .catch((error) => {
          console.log(error);
        });
      return user;
    } catch (error) {
      return error;
    }
  },
};
