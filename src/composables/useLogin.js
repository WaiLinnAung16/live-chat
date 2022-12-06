import { auth } from "../../firebase/config";
import { ref } from "vue";

let error = ref(null);
let login = async (email, password) => {
  try {
    let res = await auth.signInWithEmailAndPassword(email, password);
    if (!res) {
      throw new Error("Can't login");
    }
    return res.user;
  } catch (err) {
    error.value = err.message;
  }
};

let useLogin = () => {
  return { error, login };
};
export default useLogin;
