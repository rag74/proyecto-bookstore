import React, { useState } from "react";
import './ItemList.css';
import { Link } from 'react-router-dom';
import Item from '../Item/Item'



function ItemList ({productos, loading}) {



const [loopNum, setloopNum] = useState(8)

const loadMore = ()=> {
    if (loopNum < productos.length) {setloopNum(loopNum+8)}
};


    return(
        
        <div className="contenedor">
        {loading ?
            <div className="loading">Cargando...</div> : 
            productos.length < 1 ? 
                    <div className="catNotFound">
                        <div>Mmmm... no tenemos ese tipo de libros...🤔</div>
                        <Link className="backHome" to="/"> 
                            <p>Volver a la tienda</p>
                            <i id="homeicon" className="fas fa-home"></i>
                        </Link>
                        </div> :
            <div>
                <div className="grilla-prodI">
                {
                productos.slice(0, loopNum).map(item => {return <Item
                                                    key={item.id} 
                                                    id={item.id} 
                                                    title={item.title}
                                                    autor={item.autor}
                                                    price={item.price}
                                                    stock={item.stock}
                                                    pictureUrl={item.pictureUrl}
                                                    item={item}
                                                />
                                        })
                    }
                </div>
                <div className={(loopNum<productos.length) ? "more" : "hidden" } onClick={()=>loadMore()}><p>cargar mas...</p></div>
            </div>
        }
        </div>
    )
    }

export default ItemList