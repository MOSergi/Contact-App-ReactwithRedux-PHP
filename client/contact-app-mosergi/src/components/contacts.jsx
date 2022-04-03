import React, { useEffect, useState } from "react";
//import estilos
import "../styles/contacts.css";
//custoom hook
import { useValidateRoutesProtected } from "../customHooks/useUsers";
//icons
import { FaPlus, FaMinus } from "react-icons/fa";
//react redux imports
import { useSelector } from "react-redux";

export default function Contacts(){

    useValidateRoutesProtected();

    const username = useSelector(state => state.userName);

    const [formContact, setFormContact] = useState("noVisible");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [correo, setCorreo] = useState("");
    const [phone, setPhone] = useState("");
    const [contact, setNewContact] = useState(false);

    const [contactos, setContactos] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/getUserData/getContacts.php", {
                credentials : "include"
            })
            .then(response => response.json())
            .then((data) => {
                if (data != "No login"){
                    setContactos(data);
                }
            })
            .catch(error => console.log(error))
    }, [contact]);


    const addContact = (e)=>{
        e.preventDefault();
        
        if (phone == "" && correo == ""){
            alert("Proporcione almenos un método de contacto");
        } else {
            let newContacts = new FormData();
            newContacts.append("nombre", name);
            newContacts.append("desc", desc);
            newContacts.append("correo", correo);
            newContacts.append("tel", phone);

            fetch("http://localhost:5065/Contact-App-ReactwithRedux-PHP/server/insertData/createContacts.php", {
                method : "POST",
                body : newContacts,
                credentials : "include"
            })
            .then(response => response.json())
            .then((data) => {
                if (data == "Contact created"){
                    alert("Contacto añadido correctamente");
                    setName("");
                    setDesc("");
                    setCorreo("");
                    setPhone("");
                    setNewContact(name+correo+desc+phone+Math.random()*100);
                }
            })
            .catch(error => console.log(error))

        }

    }

    return(
        <section>
            <div className="AddC">
                <button className={formContact == "noVisible" ? "AddContact" : "btnDisabled"} onClick={()=> {formContact == "noVisible" ? setFormContact("visible") : setFormContact("noVisible")}}>{formContact == "noVisible" ? <>Añadir nuevo<FaPlus className="AddAwsme" /> </> :  <>Ocultar formulario <FaMinus className="Menos"/></>}</button>
                <form onSubmit={addContact} className={formContact == "noVisible" ? "FormNo" : "FormYes"}>
                    <input  onChange={(e)=> setName(e.target.value)} value={name} required type="text" placeholder="Nombre del contacto"/>
                    <br />
                    <textarea maxLength="250" onChange={(e)=> setDesc(e.target.value)} value={desc} required placeholder="Descripcion corta" cols="35" rows="5"></textarea>
                    <br />
                    <input onChange={(e)=> setCorreo(e.target.value)} value={correo} type="email" placeholder="Email de tu nuevo contacto"/>
                    <br />
                    <input onChange={(e)=> setPhone(e.target.value)} value={phone} type="number" placeholder="Número de teléfono de tu nuevo contacto"/>
                    <br />
                    <button className="sendContact">Añadir contacto</button>
                </form>
            </div>
            <div className="AllContacts">
                <h2>Tus contactos {username}:</h2>
                <div className="Resultados">
                    {contactos.map((contactosT)=> {
                        return (
                            <div style={{backgroundColor : "#328A53", color: "white", fontWeight : "bold"}} key={Math.random()*100}>
                                <h3>Nombre</h3>
                                <p key={contactosT.nombre_contacto}>{contactosT.nombre_contacto}</p>
                                <h3>Email</h3>
                                <p key={contactosT.correo}>{contactosT.correo == "" ? "No hay correo" : contactosT.correo}</p>
                                <h3>Descripcion</h3>
                                <p key={contactosT.descripcion_corta + " "}>{contactosT.descripcion_corta}</p>
                                <h3>Teléfono</h3>
                                <p key={contactosT.telefono}>{contactosT.telefono == "" ? "No hay teléfono" : contactosT.telefono}</p>
                            </div> 
                        );
                    })}
                </div>
            </div>
        </section>
    );
}