//imports de React
import React, { useEffect } from "react";
//css
import "../styles/header.css";
//imports react router dom
import { Link } from "react-router-dom";
//react redux imports
import { useSelector, useDispatch } from "react-redux";
import { noLogin, logedIn } from "../reduxActions/actions";
//react icons Font Awesome
import { FaHome, FaUserAlt, FaAddressBook, FaUserPlus, FaSignInAlt} from "react-icons/fa"; 

export default function Header(){

    const loginStatus = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/validateUser.php", {
            credentials : "include"
        })
        .then(response => response.json())
        .then((data) =>  {
            if (data == "LogedIn"){
                dispatch(logedIn);
            } else if (data == "No Login") {
                dispatch(noLogin);
            }
        })
        .catch(error => console.log(error))
    }, [])

    if (loginStatus == false){
        return(
            <header>
                <nav className="Menu">
                    <h3><Link className="links" to="/"><FaHome /> Home</Link></h3>
                    <ul>
                        <Link className="links important" to="/Register"><FaUserPlus /> Registro</Link>
                        <Link className="links important" to="/Login"><FaSignInAlt /> Login</Link>
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
                        <Link className="linksR" to="/Profile"><FaUserAlt /> Perfil</Link>
                        <Link className="linksR" to="/Contacts"><FaAddressBook /> Contactos</Link>
                    </ul>
                </nav>
            </header>
        );
    }
}
