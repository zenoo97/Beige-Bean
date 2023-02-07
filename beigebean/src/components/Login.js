import { useState } from "react";
import styles from "../css/style.module.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Login = () => {
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
  const signUpEmailChange = (event) => {
    setSignUpEmail(event.target.value);
    console.log(signUpEmail);
  };
  const signUpPasswordChange = (event) => {
    setSignUpPassword(event.target.value);
    console.log(signUpPassword);
  };
  const signUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  //   signIn 기본 설정
  //   const [signInEmail, setSignInEmail] = useState("");
  //   const [signInPassword, setSignInPassword] = useState("");
  //   const signInEmailChange = (event) => {
  //     setSignUpEmail(event.target.value);
  //     console.log(signUpEmail);
  //   };
  //   const signInPasswordChange = (event) => {
  //     setSignUpPassword(event.target.value);
  //     console.log(signUpPassword);
  //   };
  const signIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  console.log(app);
  return (
    <div className={styles.signUpFirst}>
      <div className={styles.signUpMain}>
        <form className={styles.signUpForm} onSubmit={signUp}>
          <h1 className={styles.signUpTitle}>회원가입</h1>
          <div>
            email:{" "}
            <input id="signUpEmail" type="email" onChange={signUpEmailChange} />
          </div>
          <div>
            password:{" "}
            <input
              id="signUpPassword"
              type="password"
              onChange={signUpPasswordChange}
            />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
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
export default Login;
