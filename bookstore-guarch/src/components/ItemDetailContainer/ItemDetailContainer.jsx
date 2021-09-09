import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../../data/data';

import { collection, query, where, getDocs, } from "firebase/firestore";

import db from '../../firebase'



function ItemDetailContainer() {

  
  const {categoria, id} = useParams()

  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      async function setearItem() {
        const arr = []
        const q = query(collection(db, "items"), where("isbn", "==", id))
        const querySnapshot = await getDocs(q);
      querySnapshot.forEach(item => {arr.push(item.data())})
      console.log(arr)
      setItem(arr);
      setLoading(false);
      }

      setearItem()

  },[]);



console.log(`este es item en ItemDetailContainer: `);
 console.log(item);
 // console.log(loading);

  return (
    
       <div className="contenedor">
         {loading ? 
        <div className="loading">Cargando...</div> :
            <div className="grilla-prod">
            <ItemDetail key={item[0].id} 
                        id={item[0].id} 
                        title={item[0].title}
                        autor={item[0].autor} 
                        price={item[0].price} 
                        stock={item[0].stock}
                        categoria={item[0].categoria}
                        pictureUrl={item[0].pictureUrl} 
                        description={item[0].description}
                        item={item[0]}
                        />
            </div>
        }
        </div>
 
  );
}

export default ItemDetailContainer

