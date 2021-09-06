import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import {CartProvider, useCart} from '../CartContext/CartContext'
import Item from "../Item/Item";

function ItemDetail ({id , title , price , autor, stock, pictureUrl, description, categoria, item}) {

    const {addToCart, cart} = useCart()
    console.log(`Params que llegan al ItemDetail: `)
    console.log(id , title , price , autor, stock, pictureUrl, description, categoria, item)
    console.log(`item en ItemDetail: ${item}`)

    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div className="cardtext">
           <h3>$ {price}</h3>
           <h3>{title} - {autor}</h3>
           <p>Descripción: {description}</p>
                <ItemCounter stock={stock} initial={1} id={id} item={item}/>    
                <div id={id+"terminar"} className="contenedorTerminar dispnone">
                    <Link to="/cart">
                    <div id={id+"buttonTerminar"} className="buttonTerminar">
                            Terminar mi compra
                    </div>
                    </Link>
                </div>
           </div>
       </div>
    )


}

export default ItemDetail