import appFirebase from "../credentials";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const frutasService = {
  //Se obtienen las frutas desde firestore
  getFrutas: async () => {
    try {
      //Se obtiene la instancia de firestore
      const db = getFirestore(appFirebase);
      //Se obtiene la coleccion de frutas
      const frutas = collection(db, "frutas");
      //Se obtienen los documentos de la coleccion
      const frutasSnapshot = await getDocs(frutas);
      //Se mapean los documentos y se agregan los id
      const frutasList = frutasSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return frutasList;
    } catch (error) {
      return error;
    }
  },
};
