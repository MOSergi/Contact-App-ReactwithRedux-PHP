//react imports
import React, { useState } from "react";
//css
import "../styles/profile.css";
//import custoom hooks
import { useValidateRoutesProtected } from "../customHooks/useUsers";
//react redux imports
import { noLogin } from "../reduxActions/actions";
import { useDispatch, useSelector} from "react-redux";
//react router dom import
import { useNavigate } from "react-router-dom";


export default function Profile(){

    //custom hook validation
    useValidateRoutesProtected();

    const dispatch = useDispatch();

    const username = useSelector(state => state.userName);

    const navigate = useNavigate();

    const [newName, setNewName] = useState("");

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

        let newNameFormdata = new FormData();
        newNameFormdata.append("newName", newName);

        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/insertData/changeName.php", {
            method: "POST",
            credentials : "include",
            body : newNameFormdata
        })
        .then(response => response.json())
        .then((data)=>{
            if (data == "Valid auth"){
                dispatch({ type : "setUsername", payload : newName });
                alert("Nombre actualizado correctamente");
                setNewName("");
            }
        })
        .catch(error => console.log(error))
    }

    return(
        <section className="sectionProfile">
            <h2>Bienvenido a tu perfil {username}</h2>
            <button onClick={()=>{logout()}}>Cerrar sesión</button>
            <h3>Opciones de cuenta</h3>
            <form onSubmit={changeName}>
                <p>Modificar tu nombre</p>
                <input onChange={(e)=> setNewName(e.target.value)} value={newName} required type="text" placeholder={username}/>
                <br />
                <button style={{marginTop : "10px"}}>Cambiar nombre</button>
            </form>
        </section>
    );
}