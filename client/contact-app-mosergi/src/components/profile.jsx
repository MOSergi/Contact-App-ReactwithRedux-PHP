//react imports
import React, { useEffect, useState } from "react";
//css
import "../styles/profile.css";
//import custoom hooks
import { useValidateRoutesProtected } from "../customHooks/loginStatusValidate";
//react redux imports
import { noLogin } from "../reduxActions/actions";
import { useDispatch, useSelector} from "react-redux";
//react router dom import
import { useNavigate } from "react-router-dom";


export default function Profile(){

    //custom hook validation
    useValidateRoutesProtected();

    const [username, setUsername ] = useState("");

    const dispatch = useDispatch();

    const loginStatus = useSelector(state => state);

    const navigate = useNavigate();

    useEffect(()=>{
        //solo se hace la peticion si el login status es true
        if (loginStatus == true){
            fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/getUserData/getName.php", {
                credentials : "include"
            })
            .then(response => response.json())
            .then((data) => {
                if (data != "No login"){
                    setUsername(data);
                } 
            })
            .catch(error => console.log(error))
        }
    }, [loginStatus])

    //logout user

    const logout = ()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/auth/logout.php", {
            credentials : "include"
        })
        .then(response => response.json())
        .then((data) => {
            if (data == "Logout correcto"){
                dispatch(noLogin);
                navigate("/Login");
            }
        })
        .catch(error => console.log(error))
    }

    //change username

    const changeName = (e)=>{
        e.preventDefault();
        alert("Aun no esta disponible esta opcion");
    }

    return(
        <section className="sectionProfile">
            <h2>Bienvenido a tu perfil {username}</h2>
            <button onClick={()=>{logout()}}>Cerrar sesión</button>
            <h3>Opciones de cuenta</h3>
            <form onSubmit={changeName}>
                <p>Modificar tu nombre</p>
                <input required type="text" placeholder={username}/>
                <br />
                <button style={{marginTop : "10px"}}>Cambiar nombre</button>
            </form>
        </section>
    );
}