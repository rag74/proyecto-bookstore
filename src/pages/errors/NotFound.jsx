import React from "react";
import './NotFound.css'
import { Link } from 'react-router-dom';

function NotFound(){

    const currentUrl = new URL(window.location.href).pathname
    

    return (
        <div className="contenedor">
            <div className="notFound"> <h6>(...{currentUrl})</h6> 
            No pude encontrar esa pagina... 
            se habra roto algo? 😨         
                          <Link className="backHome" to="/"> 
                              <p>Volver a la tienda</p>
                              <i id="homeicon" className="fas fa-home"></i>
                          </Link>
            </div>  
        </div>
    )
}

export default NotFound