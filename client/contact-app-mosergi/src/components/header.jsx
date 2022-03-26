import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header(){
    return(
        <header>
            <nav className="Menu">
                <Link className="links" to="/">Home</Link>
                <Link className="links important" to="/Register">Registro</Link>
                <Link className="links" to="/Login">Login</Link>
            </nav>
        </header>
    );
}
