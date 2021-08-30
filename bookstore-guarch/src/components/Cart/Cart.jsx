import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
import {CartProvider, useCart} from '../CartContext/CartContext'

function Cart () {

    const {addItem, cart, clear, removeItem} = useCart()


    /*const cartItems = cart.map(([{item , userSelected}])=>(

        <div key={item.id}>
            <div id={item.id}>
            <h3> {`(${userSelected} unid.) ${item.title} - valor $ ${item.price} (x unid.)`} <button onClick={()=>removeItem({item})}>eliminar</button></h3>
            </div>
        </div>

    ));*/

    const total = cart.reduce((accumulator, libro) => accumulator + (libro[0].price*libro[1]), 0);

    const cartItems = cart.map((item)=>(


        <div key={item[0].id}>
        
       <h3> {`(${item[1]} unid.) ${item[0].title} - valor $ ${item[0].price} (x unid.)`} <button onClick={()=>removeItem(item[0].id)}>remove</button> </h3>
        
        </div>

    ));


    return(
        <>
        <div className="contenedor">
        <div className="cartcontainter">
        {cart.length<1 ?

        <div>
           <h2>No hay productos en el carro de compras</h2>
           <Link to="/"> 
           <i id="homeicon" class="fas fa-home"></i>
           </Link>
        </div>
            
            :

            <div>        
            <div className="fila">{cartItems}</div>
                <div>Importe TOTAL: $ {total}</div>
                <div className="emptyCart" onClick={clear}> Vaciar carro de compra</div> 
            </div> 
            
        }
        </div>
        </div>
        </>
    )

}

export default Cart
