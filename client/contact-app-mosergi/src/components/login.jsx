//react imports
import React, { useState } from "react";
//css
import "../styles/login.css";
//react redux imports
import {useDispatch} from "react-redux";
import { logedIn } from "../reduxActions/actions";
//react router usenavigate import
import { useNavigate } from "react-router-dom";
//custom hook import
import { useValidateRoutesNoProtected } from "../customHooks/useUsers";


export default function Login(){

    useValidateRoutesNoProtected();

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handeleSubmit = (event)=>{
        event.preventDefault();
        
        let formadata = new FormData();
        formadata.append("email", email);
        formadata.append("password", pass);

        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/loginUsers.php",{
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
                dispatch(logedIn);
                navigate("/Profile");
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