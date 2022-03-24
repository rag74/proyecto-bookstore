import React, { useState } from "react";
import './Contacto.css';


function Contacto() {

 

    return (
        <div className="contenedor">
            <section className="form">
            {window.location.href.indexOf("&email") > -1 ? 
              <div id="formEntregado" class="">
                  <div className="hijo">
                  <h1>En breve te estaremos contactando ¡Muchas gracias!</h1>
                  <div className="wa"><a href="https://api.whatsapp.com/send?phone=541125492333&text=Hola%20Conexi%C3%B3n!%20" target="_blank">
                  <p><i className="fab fa-whatsapp no-hover"></i>Escribinos por Whatsapp</p></a></div>
                  </div>
              </div> :
              <form name="submit-to-google-sheet" method="get" id="formulario">
                  <h1>Dejanos un mensaje</h1>
                  <h3>¿No encontraste ese libro? Ecribinos que te lo encontramos.</h3>
                  <p><label for="nombre">Nombre</label></p>
                  <input type="text" name="nombre" id="nombre" placeholder="Nombre" required="true"></input>
                  <p><label for="email">Email</label></p>
                  <input type="email" name="email" id="email" placeholder="E-mail" required="true"></input>
                  <p><label for="consulta">Consulta:</label></p>
                  <textarea type="text" name="consulta" id="consulta" placeholder="Dejanos tu consulta acá, en unos minutos te contestamos..." required="true"></textarea>
                  <input type="submit"></input>
                  <div className="wa">
                  <a href="https://api.whatsapp.com/send?phone=541111111111&text=Hola%20Bookstore!%20" target="_blank">     
                    <p><i className="fab fa-whatsapp"></i>Escribinos por Whatsapp</p>
                  </a>
                  </div>
              </form>
            }
          </section>
        </div>
        
    )

}

export default Contacto