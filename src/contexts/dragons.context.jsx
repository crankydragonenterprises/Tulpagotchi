import { getDocumentById } from "../utils/firebase/firebase.utils"

export const getDragonFromDB = async(dragonId) => {
    const docSnapshot = await getDocumentById("dragons", dragonId);
    console.log(docSnapshot);
}