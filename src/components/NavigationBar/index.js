import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const NavigationBar = () => {
  return <div className="navigation-bar-container">
    <Link to="/mapa">Mapa</Link>
    <Link to="/empresas">Empresas</Link>
    <Link to="/produtos">Produtos</Link>
  </div>   
  
  
}

export default NavigationBar;