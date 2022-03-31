//imports de React
import React from "react";
//css
import "../styles/header.css";
//imports react router dom
import { NavLink, Link } from "react-router-dom";
//react redux imports
import { useSelector } from "react-redux";
//react icons Font Awesome
import { FaHome, FaUserAlt, FaAddressBook, FaUserPlus, FaSignInAlt} from "react-icons/fa"; 

export default function Header(){

    const loginStatus = useSelector(state => state.loginStatus);

    if (loginStatus == false){
        return(
            <header>
                <nav className="Menu">
                    <h3><Link className="links" to="/"><FaHome /> Home</Link></h3>
                    <ul>
                        <NavLink className={({isActive})=>{return isActive ? "links important activo" : "links important"}} to="/Register"><FaUserPlus /> Registro</NavLink>
                        <NavLink className={({isActive})=>{return isActive ? "links important activo" : "links important"}} to="/Login"><FaSignInAlt /> Login</NavLink>
                    </ul>
                </nav>
            </header>
        );
    } else {
        return(
            <header>
                <nav className="Menu">
                    <h3><Link className="links" to="/"><FaHome /> Home</Link></h3>
                    <ul>
                        <NavLink className={({isActive})=>{return isActive ? "linksR activo" : "linksR"}} to="/Profile"><FaUserAlt /> Perfil</NavLink>
                        <NavLink className={({isActive})=>{return isActive ? "linksR activo" : "linksR"}} to="/Contacts"><FaAddressBook /> Contactos</NavLink>
                    </ul>
                </nav>
            </header>
        );
    }
}
