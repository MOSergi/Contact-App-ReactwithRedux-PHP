import React from "react";
import { useState } from "react";
import "../styles/register.css";

export default function Register(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();

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
                let registerSec = document.getElementById("registerSec");
                if (document.querySelector("#registeredSuccesful") != null){
                    document.querySelector("#registeredSuccesful").textContent = "Registrado Correctamente";
                    registerSec.children[0][0].value = "";
                    registerSec.children[0][1].value = "";
                    registerSec.children[0][2].value = "";
                } else {
                    let h2 = document.createElement("h2");
                    h2.innerText = "Registro Correcto";
                    h2.style.color = "green";
                    h2.style.textAlign = "center";
                    h2.setAttribute("id", "registeredSuccesful")
                    registerSec.appendChild(h2);
                    registerSec.children[0][0].value = "";
                    registerSec.children[0][1].value = "";
                    registerSec.children[0][2].value = "";
                }
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