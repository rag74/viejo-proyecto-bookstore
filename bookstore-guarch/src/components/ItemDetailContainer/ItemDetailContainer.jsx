import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemDetail from "../ItemDetail/ItemDetail";
import data from '../../data/data';



function ItemDetailContainer() {

  
  const {categoria, id} = useParams()

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true)


useEffect(()=>{
      const getProductos = ()=> {
        return new Promise ((resolve, reject)=>{
          setTimeout (()=>{
            resolve(data),
            reject(new Error('No hay productos'));
          },2000);
        })
      };


    setearItems()
      async function setearItems() {
        const traerItems = await getProductos();
        const itemSelected = traerItems.find((traerItems) => traerItems.id === id);
      setItem(itemSelected);
      setLoading(false)
      }

  },[]);



  console.log(item);
  console.log(loading);

  return (
    
       <div className="contenedor">
         {loading ? 
        <div className="loading">Cargando...</div> :
            <div className="grilla-prod">
            <ItemDetail key={item.id} 
                        id={item.id} 
                        title={item.title}
                        autor={item.autor} 
                        price={item.price} 
                        stock={item.stock}
                        categoria={item.categoria}
                        pictureUrl={item.pictureUrl} 
                        description={item.description} />
            </div>
        }
        </div>
 
  );
}

export default ItemDetailContainer

