import { ref } from "vue";
import { auth } from "../../firebase/config";

let error = ref(null);
let createAccount = async (email, password, displayName) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    res.user.updateProfile({ displayName });
    if (!res) {
      throw new Error("could not create new user");
    }
    return res.user;
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};
let useSignup = () => {
  return { error, createAccount };
};
export default useSignup;
