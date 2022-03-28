import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { noLogin, logedIn } from "../reduxActions/actions";
import "../styles/login.css";

export default function Login(){

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const dispatch = useDispatch();

    const handeleSubmit = (event)=>{
        event.preventDefault();
        
        let formadata = new FormData();
        formadata.append("email", email);
        formadata.append("password", pass);

        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/validateUser.php",{
            method: "POST",
            body: formadata,
            credentials : "include"
        })
        .then(response => response.json())
        .then((datos) =>{
            if (datos == "No data found"){
                alert(datos);
            } else if (datos == "Wrong username or password"){
                alert(datos);
            } else if (datos == "Valid Password"){
                alert(datos);
                dispatch(logedIn);
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <section id="loginSec">
            <form onSubmit={handeleSubmit}>
                <h3>Inicio sesión</h3>
                <input onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="Introduce tu email" />
                <br />
                <input onChange={(e)=>{setPass(e.target.value)}} required type="password" placeholder="Introduce tu contraseña"/>
                <br />
                <button>Login</button>
            </form>
        </section>
    );
}