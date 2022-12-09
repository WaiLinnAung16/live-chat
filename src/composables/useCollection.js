import { db } from "../../firebase/config";
import { ref } from "vue";

let useCollection = (colName) => {
  let error = ref(null);
  let addDoc = async (doc) => {
    try {
      await db.collection(colName).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = "Something Wrong!!!";
    }
  };
  return { error, addDoc };
};
export default useCollection;
