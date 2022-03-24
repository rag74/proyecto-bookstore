import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import './Cart.css'
import { useCart } from '../CartContext/CartContext'

function Cart () {

    const {cart, clear, removeItem, user, defineUser} = useCart()

    const history = useHistory();

    const total = cart.reduce((accumulator, libro) => accumulator + (libro[0].price*libro[1]), 0);

    const cartItems = cart.map((item)=>(
        <div key={item[0].id}>
        <div id="cartRow">
        <span className="imagen"><Link to={`/item/${item[0].id}`}><img src={item[0].pictureUrl} alt=""/></Link></span>
        <span className="titulo"><Link to={`/item/${item[0].id}`}>{`${item[0].title} - ${item[0].autor}`}</Link></span>
        <span className="cantidadCart">{`${item[1]} unid.`}</span>
        <span className="precioCart">{`$ ${item[0].price*item[1]}`}</span>
        <span className="eliminar"><i className="fas fa-times" onClick={()=>removeItem(item[0].id)}></i></span>
        </div>
        <hr />
        </div>
    ));



    const openClose = ()=>{
        var modalOverlay = document.querySelector("#modal-overlay");
        var modal = document.querySelector("#modal");
        modalOverlay.classList.toggle("closed");
        modal.classList.toggle("fadeIn");
        modal.classList.toggle("closed");
        modal.classList.toggle("fadeIn");
    }

    const handleSubmit = e => {
        e.preventDefault();
        var name = document.querySelector("#nombre").value;
        var mail = document.querySelector("#email").value;
        var phone = document.querySelector("#phone").value;
        var street = document.querySelector("#street").value;
        var number = document.querySelector("#number").value;
        var CP = document.querySelector("#CP").value;
        defineUser(name, mail, phone, street, number, CP);
        setTimeout(()=>{history.push('/payment');}, 200 )
      }

       
    return(
        <>
        <div className="contenedor">
            <div className="cartcontainter">
                {cart.length<1 ?             
                    <div className="empty"> 
                        No hay productos en el carro de compras             
                        <Link className="backHome" to="/"> 
                            <p>Volver a la tienda</p>
                            <i id="homeicon" className="fas fa-home"></i>
                        </Link>
                    </div>
                    
                    :

                    <div>
                    <h1>CARRO DE COMPRAS</h1>        
                    <div className="tableCart">{cartItems}</div>
                        <div className="importeTotal">
                            <h3>Importe TOTAL: $ {total}</h3>
                        </div>
                        <div className="cartButtons">
                            <div className="circle emptyCart" onClick={clear}><i className="fas fa-times"></i><p>vaciar carro</p></div>
                            <Link to="/">
                                <div className="circle back"><i class="fas fa-exclamation"></i><p>faltan cosas</p></div>
                            </Link>
                            <Link to="/cart">
                                <div className="circle pay" onClick={openClose}><i class="fas fa-check"></i><p>pagar</p></div>
                            </Link>
                        </div>
                            <div class="modal-overlay closed" id="modal-overlay"></div>
                            <div class="modal closed fadeIn" id="modal">
                                <i className="fas fa-times" id="close-button" onClick={openClose}></i>
                                <h2>DATOS DEL DESTINATARIO</h2>
                                <form name="generateOrder" id="generateOrder" onSubmit={handleSubmit}>
                                    <p><label for="nombre">Nombre y Apellido</label></p>
                                    <input type="text" name="nombre" id="nombre" placeholder="Nombre y Apellido" required="true"></input>
                                    <p><label for="email">Email</label></p>
                                    <input type="email" name="email" id="email" placeholder="E-mail" required="true"></input>
                                    <p><label for="phone">Teléfono</label></p>
                                    <input type="tel" name="phone" id="phone" placeholder="ej. 1152763258" pattern="[0-9]{10}"required="true"></input>
                                    <h4>DIRECCIÓN DE ENTREGA</h4>
                                    <hr />
                                    <p><label for="street">Calle</label></p>
                                    <input type="text" name="street" id="street" placeholder="Calle" required="true"></input>
                                    <span><label for="number">Número</label></span>
                                    <span><label for="CP">Cod. Postal</label></span>
                                    <span><input type="text" name="number" id="number" placeholder="Número" required="true"></input></span>
                                    <span><input type="text" name="CP" id="CP" placeholder="ej. 1425" pattern="[0-9]{4}" required="true"></input></span>
                                    <input type="submit" id="sub" value="Enviar"></input>
                                </form>
                            </div>
                        
                    </div> 
                    
                }
            </div>
        </div>
        </>
    )

}

export default Cart
