import React from "react";
import Header from "../../components/Header/Header";
import css from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "admin") {
      navigate("/dashboard");
    } else {
      alert("");
    }
  };
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={css.wrapper}>
      <form action="" onSubmit={submit}>
        <input type="text" value={login} onChange={handleLogin} />
        <input type="password" value={password} onChange={handlePassword} />
        <button>Войти</button>
      </form>
    </div>
  );
}
