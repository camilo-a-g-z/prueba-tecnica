import appFirebase from "../credentials";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

export const frutasService = {
  //Se obtienen las frutas desde firestore
  getFrutas: async () => {
    try {
      const db = getFirestore(appFirebase);
      const frutas = collection(db, "frutas");
      const frutasSnapshot = await getDocs(frutas);
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
