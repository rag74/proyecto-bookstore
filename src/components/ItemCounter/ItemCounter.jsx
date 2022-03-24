import React, { useState } from 'react';
import './ItemCounter.css';
import { useCart } from '../CartContext/CartContext'


function ItemCounter ({ initial, stock, id, item}) {

    const [userSelected, setUserSelected] = useState(initial);
    const {checkCartId} = useCart()

    
    const increment = ()=> {
        if (userSelected < stock) {setUserSelected(userSelected+1)} 
    };

    const decrement = ()=> {
        if (userSelected > 1) {setUserSelected(userSelected-1)}
    };

    const handleAdd = ()=>{checkCartId(id, item, userSelected, setUserSelected, stock)}


    return (
        <>
        {stock > 0 ?
            <div id={id+"counter"} className="contenedorCounter">
                    <div className="counter">
                        <div className="buttonD" onClick={()=>decrement()}>-</div>
                        <div className="cantidad">{userSelected}</div>
                        <div className="buttonI"onClick={()=>increment()}>+</div>
                    </div>
                    <div id={id+"buttonAdd"} className="buttonAdd" onClick={handleAdd}>
                    Agregar al carrito
                    </div>
                <div id={id+"agregado"} className="hidden">.</div>
            </div> :
            
            <div id={id+"sinStock"} className="contenedorSinStock">
                        <div id={id+"buttonSinStock"} className="buttonSinStock">
                                Producto sin stock
                        </div>

            </div>
        }
        </>
    )

}


export default ItemCounter

