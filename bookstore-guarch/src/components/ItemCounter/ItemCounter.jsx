import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCounter.css';
import {CartProvider, useCart} from '../CartContext/CartContext'
import Item from '../Item/Item';

function ItemCounter ({ initial, stock, id , onAdd, item, isInCart }) {

    const [userSelected, setUserSelected] = useState(initial);
    const {addItem, cart, checkCartId, isIn} = useCart()

    
    const increment = ()=> {
        if (userSelected < stock) {setUserSelected(userSelected+1)} 
    };

    const decrement = ()=> {
        if (userSelected > 1) {setUserSelected(userSelected-1)}
    };

    const handleAdd = ()=>{checkCartId(id, item, userSelected)}// dos objetos addItem([{item,userSelected}])} o forma anterior ([item , userSelected]) 
    // preuba de checkCart checkCartId(id, item, userSelected)
    //luego de resuelto poner onadd ()=>{onAdd(userSelected, setUserSelected, initial, id); addItem([{item,userSelected}])}


    return (
        <>
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
        </div>
        </>
    )

}


export default ItemCounter

