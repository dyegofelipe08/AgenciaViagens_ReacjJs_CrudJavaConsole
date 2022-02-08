import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <header>
            <nav className="menu">
                <Link to="/" style={{fontSize: 'large'}} >Brasil sem fronteiras</Link ><br />
                <Link to="/Destinos">Destinos</Link><br />
                <Link to="/Promocoes">Promoções</Link><br />
                <Link to="/Suporte">Fale conosco</Link><br />
            </nav>
        </header>
    );
}