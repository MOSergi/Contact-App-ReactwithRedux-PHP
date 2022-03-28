import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.css";
import icon from "../resources/homeIcon.png"

export default function Header(){

    const loginStatus = useSelector(state => state);

    if (loginStatus == false){
        return(
            <header>
                <nav className="Menu">
                    <h3><Link className="links" to="/"><img src={icon}/></Link></h3>
                    <ul>
                        <Link className="links important" to="/Register">Registro</Link>
                        <Link className="links important" to="/Login">Login</Link>
                    </ul>
                </nav>
            </header>
        );
    } else {
        return(
            <header>
                <nav className="Menu">
                    <h3><Link className="links" to="/"><img src={icon}/></Link></h3>
                    <ul>
                        <Link className="links important" to="/Profile">Profile</Link>
                    </ul>
                </nav>
            </header>
        );
    }
}
