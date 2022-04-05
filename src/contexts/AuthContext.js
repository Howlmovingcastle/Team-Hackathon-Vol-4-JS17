import fire from "../fire";
import React, { useEffect, useState } from "react";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");

  function handleLogin(email, password, navigate) {
    setError("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"))
      .catch((err) => setError(err.message));
  } // Функция для входа юзера

  function handleSignUp(email, password, navigate) {
    setError("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => handleLogin(email, password, navigate))
      .catch((err) => setError(err.message));
  } // функция для регистрации юзера

  function handleLogOut() {
    fire.auth().signOut();
  } // функция для выхода юзера

  function authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        setCurrentUser("");
      }
    });
  } // функция для хранения юзеров и проверки на наличие

  useEffect(() => {
    authListener();
  }, []); // для отлавливания проверки при каждом рендере и всегда сохраняет текущее состояние currentUser

  return (
    <authContext.Provider
      value={{ currentUser, error, handleLogin, handleSignUp, handleLogOut }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
