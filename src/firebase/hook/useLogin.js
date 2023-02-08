// import { useNavigate } from "react-router-dom";
// import { auth } from "../config";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useState } from "react";
// const useLogin = (email, password) => {
//     const [user,setUser] = useState(null)
//     const [errorMessage, setErrorMessage] = useState(null)
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         setUser(user)
//         useNavigate("/products/Latest")
//         console.log(user);
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setErrorMessage(errorMessage)
//         console.log(errorCode, errorMessage)
//     });
//     return {user,errorMessage}
// }

// export default useLogin