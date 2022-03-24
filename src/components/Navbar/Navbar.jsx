import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext'
import Cartwidget from '../Cartwidget/Cartwidget'




function Navbar() {

    const {cart} = useCart()
    const [click, setClick] = useState(false);
    const [clickSub, setClickSub] = useState(false);
    
    const handleClick = () => {
        if (window.innerWidth < 1024) {
            setClick(!click)
        } else {setClick(false)}
    };
 
    const handleClickSub = () => {
            setClickSub(true);
            setTimeout(() => {setClickSub(false)}, 50)    
    };
 

    return(
        <header>
        <div className="contenedor">

            <Link to="/">   
                <i className="fas fa-book-open libro"></i>
                <h1>BOOKSTORE</h1>
            </Link>

            <div className="burger" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <Cartwidget/>

            <nav className={click ? "menu fold" : "menu"} onClick={handleClick}>
                <ul className="menunav">
                    <li><Link to="/category/novedades">Novedades</Link></li>
                    <li><Link to="/category/mas vendidos">Los más vendidos</Link></li>
                    <li><Link to="/" >Catálogo <i class="fas fa-caret-down"></i></Link>
                        <ul className={clickSub ? "submenu none" : "submenu"} onClick={handleClickSub}>
                            <li><Link to="/category/literatura argentina" >Literatura Argentina</Link></li>
                            <li><Link to="/category/internacional" >Internacional</Link></li>
                            <li><Link to="/category/novela">Novela</Link></li>
                            <li><Link to="/category/clásicos">Clásicos</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>

        </div>
    </header>

    );

}

export default Navbar