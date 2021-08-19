import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../../data/data';



function ItemDetailContainer() {

  
  const {categoria, id} = useParams()

  const [itemD, setItem] = useState([]);
  const [loading, setLoading] = useState(true)


useEffect(()=>{
      const getItems = ()=> {
        return new Promise ((resolve, reject)=>{
          setTimeout (()=>{
            resolve(data),
            reject(new Error('No hay productos'));
          },2000);
        })
      };


    setearItems()
      async function setearItems() {
        const traerItems = await getItems();
        const itemSelected = traerItems.find((traerItems) => traerItems.id === id);
      setItem(itemSelected);
      setLoading(false)
      }

  },[]);



  console.log(itemD);
  console.log(loading);

  return (
    
       <div className="contenedor">
         {loading ? 
        <div className="loading">Cargando...</div> :
            <div className="grilla-prod">
            <ItemDetail key={itemD.id} 
                        id={itemD.id} 
                        title={itemD.title} 
                        price={itemD.price} 
                        stock={itemD.stock}
                        categoria={itemD.categoria}
                        pictureUrl={itemD.pictureUrl} 
                        description={itemD.description} />
            </div>
        }
        </div>
 
  );
}

export default ItemDetailContainer

