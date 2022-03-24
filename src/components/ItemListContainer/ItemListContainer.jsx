import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { collection, query, where, getDocs  } from "firebase/firestore";
import db from '../../firebase'

import { useParams } from "react-router-dom";


function ItemListContainer() {

  const {categoria} = useParams()
  
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    async function getProductos() {
        const arr = []

        if(categoria!=null) {
    
            const q = query(collection(db, "items"), where("categoria", "array-contains", (categoria)))
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach(item => {
            arr.push(item.data())
            })
            
            setProductos(arr);
            setLoading(false);

        } else {
            const querySnapshot = await getDocs(collection(db, "items"));
            querySnapshot.forEach((item) => {
                arr.push(item.data())
                });
                
                setProductos(arr);
                setLoading(false);
        }}

    getProductos()  
    
}, [categoria]);


  return (
    <main>
  
      <div className="contenedor">
          <h1 className="tituloseccion">{categoria!=null ? categoria.toUpperCase() : "CATALOGO"}</h1>   
          <div className="catalogo"> 
            <ItemList productos={productos}
                      loading={loading}
            />
          </div>
      </div>
    
    </main>
  );

}

export default ItemListContainer