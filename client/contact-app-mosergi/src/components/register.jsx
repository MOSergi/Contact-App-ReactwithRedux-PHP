//react imports
import React, { useState } from "react";
//css
import "../styles/register.css";
//import custom hook
import { useValidateRoutesNoProtected } from "../customHooks/useUsers";
//react router dom imports
import { useNavigate } from "react-router-dom";


export default function Register(){

    useValidateRoutesNoProtected();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const navigate = useNavigate();

    const handeleSubmit = (e)=>{
        e.preventDefault();

        let formdata = new FormData();

        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("password", pass);

        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/insertData/insertUsers.php", {
            method : "POST",
            body : formdata
        })
        .then(response => response.json())
        .then((data)=>{
            if (data == "Invalid Email"){
                alert("Email no válido");
            } else if (data == "Registered Sucessfully"){
                alert("Registro Correcto");
                navigate("/Login");
            }
        })
        .catch(error => console.log(error))

    }


    return(
        <section id="registerSec">
            <form onSubmit={handeleSubmit}>
                <h3>Registrarse</h3>
                <input onChange={(e)=>{setName(e.target.value)}} required type="text" placeholder="Introduce tu nombre" />
                <br />
                <input onChange={(e)=>{setEmail(e.target.value)}} required type="email" placeholder="Introduce tu email" />
                <br />
                <input onChange={(e)=>{setPass(e.target.value)}} required minLength='8' type="password" placeholder="Introduce tu contraseña"/>
                <br />
                <button>Registrarse</button>
            </form>
        </section>
    );
}