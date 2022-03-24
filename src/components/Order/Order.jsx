import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Order.css'
import { useCart } from '../CartContext/CartContext'
import { doc, setDoc } from '@firebase/firestore';
import db from '../../firebase'


function Order() {
    const {cart, user, generateOrderNum, clear, stockControl} = useCart()
    const [pagando, setPagando] = useState(true)
    const [cartCopy, setCartcopy] = useState(cart)
    const [orderDate, setorderDate] = useState(new Date().toLocaleString())
    const [orderNum, setorderNum] = useState(generateOrderNum()+"-v02")
    const [userCopy, setuserCopy] = useState(user)



    const total = cartCopy.reduce((accumulator, libro) => accumulator + (libro[0].price*libro[1]), 0);
    const orderItems = cartCopy.map((item)=>(
        <div key={item[0].id}>
        <p>{`- "${item[0].title}" (${item[0].autor}) - $${item[0].price} | ${item[1]} unid.`}</p>
        </div>
    ))

    const orderI = cartCopy.map((item)=>({id: item[0].id, title: item[0].title, price: item[0].price, cantidad: item[1]}))
    const remainingStock = cartCopy.map((item)=>({id: item[0].id, remaining: item[2]}))


    
 
useEffect(() => {
    async function subirOrden(){
        const orderData = {
            buyer: {
                name: user.name,
                phone: user.phone,
                mail: user.mail
                }, 
            
            items: orderI,
                
            date: orderDate,
            total: total,
            }
            
        await setDoc(doc(db, "orders", orderNum), orderData);
        clear();
        setPagando(false)
    };
    subirOrden();

}, []);

stockControl(remainingStock)


    return (
        <>
        <div className="contenedor">
        {pagando ? <div className="pagando">Procesando su pago...</div> :  
                <div>
                <div className="orderContainer">
                    <h2>¡Gracias por su compra! Pago realizado con éxtio</h2>
                    <p>Nro. de Orden: {orderNum}</p>
                    <p>Fecha de compra: {orderDate}</p>
                    <hr />
                    <h2>Detalle de la orden</h2>
                    <div>{orderItems}</div>
                    <p>Importe TOTAL: ${total}.-</p>
                    <h2>Información del comprador</h2>
                    <p>Nombre: {userCopy.name}</p>
                    <p>Mail: {userCopy.mail} / Tel: {userCopy.phone}</p>
                    <p>Dirección de envío:</p>
                    <p>{userCopy.street} {userCopy.number} - CP {userCopy.CP}</p>
                </div>
                <Link className="backHome" to="/" onClick={clear}> 
                    <p>Volver a la tienda</p>
                    <i id="homeicon" className="fas fa-home"></i>
                </Link>
                </div>
        }       
        </div>
        </>
    )
}

export default Order
