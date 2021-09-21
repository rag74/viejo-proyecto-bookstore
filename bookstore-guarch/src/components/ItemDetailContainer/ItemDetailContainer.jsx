import React, { useEffect, useState } from "react";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
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
        <div className="loading">Cargando...</div> :  item[0] == undefined ? <div className="notFound">Creo que no tengo ese libro...😰</div> :
            <div className="grilla-prod">
             <ItemDetail key={item[0].id} 
                         item={item[0]}
                        />
            </div>
          
        }
        </div>
 
  );
}

export default ItemDetailContainer
