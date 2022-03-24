import React from 'react';
import './Cartwidget.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext'


function Cartwidget(){

    const {cart} = useCart()

    var itemsCantidad = cart.reduce((accumulator, libro) => accumulator + libro[1], 0)

    const classIcon = (itemsCantidad<1) ? "hidden" : "normal animate__animated animate__heartBeat";


    return (
        <Link to="/cart">
            <i className="fas fa-shopping-basket" id="carticon">
                <div id="itemsCantidad" className={classIcon}>{itemsCantidad}</div>
            </i>
        </Link>
    )

}

export default Cartwidget