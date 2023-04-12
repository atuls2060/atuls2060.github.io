import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore";
const sendMesage = async (message) => {
    return addDoc(collection(db, "messages"), message);
}
export default sendMesage;