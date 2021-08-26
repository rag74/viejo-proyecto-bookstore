import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import {CartProvider, useCart} from '../CartContext/CartContext'

function ItemDetail ({id , title , price , autor, stock, pictureUrl, description, categoria}) {

    //const {onAdd, terminarCompra} = useCart()
   const [terminarCompra, setterminarCompra] = useState(false)

    const onAdd = (userSelected, setUserSelected, initial, id)=> {
        console.log("genial! Agregamos al carro "+userSelected)
        setUserSelected(initial);
        let element = document.getElementById(id+"agregado");
        element.innerHTML = "Productos agregados: "+userSelected;
        element.className = "agregado";
        setTimeout(()=>{setterminarCompra(true)},1000);
        };
    

    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div className="cardtext">
           <h3>$ {price}</h3>
           <h3>{title} - {autor}</h3>
           <p>Descripción: {description}</p>
           {!terminarCompra ?
                <ItemCounter stock={stock} initial={1} id={id} onAdd={onAdd}/> :    
                
                <div id={id+"terminar"} className="contenedorTerminar">
                    <Link to="/cart">
                    <div id={id+"buttonTerminar"} className="buttonTerminar">
                            Terminar mi compra
                    </div>
                    </Link>
                </div>
            }
           </div>
       </div>
    )


}

export default ItemDetail