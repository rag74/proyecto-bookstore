import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {


    return (
        <>
        <footer>
            <div className="contenedor">
               <Link to=""><i class="fab fa-facebook-f"></i></Link> 
               <Link to=""><i class="fab fa-twitter"></i></Link> 
               <Link to=""><i class="fab fa-instagram"></i></Link> 
               <Link to=""><i class="fab fa-whatsapp"></i></Link> 
            </div>
        </footer>
        </>
    )
}

export default Footer