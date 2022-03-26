import React from "react";
import "../styles/sectionIndexPage.css";
import { Link } from "react-router-dom";

function SectionIndexPage(){
    return(
        <section id="indexSection">
            <h2>Bienvenido a mi contact App</h2>
            <div id="indexDivSection">
                <h3>Registrate y guarda tus contactos rapidamente</h3>
                <Link style={{backgroundColor : "#2b47e6", padding : "10px", color: "white", textDecoration: "none", fontSize : "18px", fontWeight: "bold"}} to="/Register">Registro</Link>
            </div>
        </section>
    );
}

export default SectionIndexPage;

