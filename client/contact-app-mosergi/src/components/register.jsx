import React from "react";
import { useState } from "react";
import "../styles/register.css";

export default function Register(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

    const handeleSubmit = (e)=>{
        e.preventDefault();
        
    }


    return(
        <section id="registerSec">
            <form onSubmit={handeleSubmit}>
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