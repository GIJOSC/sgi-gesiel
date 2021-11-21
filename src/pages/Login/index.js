import React, { useState } from "react";
import { useHistory } from "react-router";
import './style.css';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Favor inserir seu Email");
      return;
    }
    if (!password) {
      alert("Favor inserir sua senha");
      return;
    }
    alert("Login Realizado com sucesso!");
    history.push("/mapa");
  };

  return (
    <div className="login-container">
      <h1 className="login-h1">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  ); 
}

export default Login;