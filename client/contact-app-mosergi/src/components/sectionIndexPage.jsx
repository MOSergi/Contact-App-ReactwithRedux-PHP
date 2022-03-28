import React from "react";
import "../styles/sectionIndexPage.css";
import { Link } from "react-router-dom";
import addNotes from "../resources/addNotes.png";

function SectionIndexPage(){
    return(
        <section id="indexSection">
            <h2>Aplicación de gestión de contactos</h2>
            <div id="indexDivSection">
                <h3>Esta app te permite guardar todos tus contactos de forma rápida y sencilla. ¿Quieres guardar un contacto pero no tienes su número? Despreocupate, también puedes guardar su correo electrónico y de esta forma mantener una forma alternativa de contacto.</h3>
                <h2>¿Quieres comenzar?</h2>
                <Link className="btnLink" to="/Register">Registro</Link>
                <img src={addNotes} alt="Imagen añadir Notas" />
            </div>
            <h3>App creada y desarrollada por Sergio Orozco</h3>
            <h4>Mi <a href="https://github.com/MOSergi">Github</a></h4>
        </section>
    );
}

export default SectionIndexPage;