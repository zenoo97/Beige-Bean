import { useState } from "react";
import styles from "../css/style.module.css";
import { MultiFactorInfo } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import MainPage from "../components/MainPage";
const SignIn = () => {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCoCdU09nQ8c0xxwS2Lv-vH0Lq-H2YqJ2k",
    authDomain: "beigebeanlogin.firebaseapp.com",
    projectId: "beigebeanlogin",
    storageBucket: "beigebeanlogin.appspot.com",
    messagingSenderId: "536208468832",
    appId: "1:536208468832:web:ae87cfe02626816018cc05",
    measurementId: "G-YXC0TN7DX3",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth();
  //   signUp 기본 설정
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [sucOrFailLogin, setSucOrFailSucLogin] = useState(false);
  const signUpEmailChange = (event) => {
    setSignUpEmail(event.target.value);
    console.log(signUpEmail);
  };
  const signUpPasswordChange = (event) => {
    setSignUpPassword(event.target.value);
    console.log(signUpPassword);
  };

  const signIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        if (sucOrFailLogin === false) {
          setSucOrFailSucLogin((curr) => !curr);
        }
        console.log(sucOrFailLogin);

        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const loginClick = () => {};
  console.log(app);
  return (
    <div className={styles.signUpFirst}>
      <div className={styles.signUpMain}>
        <form className={styles.signUpForm} onSubmit={signIn}>
          <h1 className={styles.signUpTitle}>로그인</h1>
          <div>
            email:{" "}
            <input id="signInEmail" type="email" onChange={signUpEmailChange} />
          </div>
          <div>
            password:{" "}
            <input
              id="signInPassword"
              type="password"
              onChange={signUpPasswordChange}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
