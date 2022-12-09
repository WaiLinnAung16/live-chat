import { ref } from "vue";
import { auth } from "../../firebase/config";

let error = ref(null);
let log_out = async () => {
  try {
    let signout = await auth.signOut();
    console.log("logout");
  } catch (err) {
    error.value = err.message;
    console.log(error.value);
  }
};
let useLogout = () => {
  return { error, log_out };
};
export default useLogout;
