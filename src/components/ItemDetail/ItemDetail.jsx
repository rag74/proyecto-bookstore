import React from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter'


function ItemDetail ({item}) {

const linksCat = item.categoria.map((cat)=>(
    <div key={cat} className="catLink">
    <Link to={`/category/${cat}`}>{cat}</Link>
    </div>
        ))



    return (
       <div className="contenedor">
       <div className="card">
           <div className="cardImg">
                <img src={item.pictureUrl} alt="" />
           </div>
           <div className="cardtext">
                <h2>{item.title.toUpperCase()}</h2>
                <hr />
                <ul>
                    <li>
                    <span className="tit">AUTOR:</span><a>{item.autor}</a>
                    </li>
                    <li>
                    <span>EDITORIAL:</span><a>{item.editorial}</a>   
                    </li>
                    <li>
                    <span>ISBN:</span><a>{item.isbn}</a>   
                    </li>
                    <li>
                    <span>PÁGINAS:</span><a>{item.pages}</a>   
                    </li>
                    <li>
                    <span>AÑO:</span><a>{item.year}</a>   
                    </li>
                    <li id="box">
                    <span>MATERIA:</span><a><div id="catLink">{linksCat}</div></a>
                    </li>
                </ul>
                <hr />
                <h2 className="precio">PRECIO: <span>$ {item.price}</span></h2>
                        <ItemCounter stock={item.stock} initial={1} id={item.id} item={item}/>    
                        <div id={item.id+"terminar"} className="contenedorTerminar dispnone">
                            <Link to="/cart">
                            <div id={item.id+"buttonTerminar"} className="buttonTerminar">
                                    Terminar mi compra
                            </div>
                            </Link>
                        </div>
           </div>
       </div>
       <div className="description">
           <h3>DESCRIPCIÓN:</h3>
           <p>{item.description}</p>
       </div>
       </div>
    )


}

export default ItemDetail