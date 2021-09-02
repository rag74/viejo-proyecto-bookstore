import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
import {CartProvider, useCart} from '../CartContext/CartContext'

function Cart () {

    const {cart, clear, removeItem} = useCart()


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
        <div id="cartRow">
        <span className="imagen"><Link to={`/item/${item[0].id}`}><img src={item[0].pictureUrl} alt=""/></Link></span>
        <span className="titulo"><Link to={`/item/${item[0].id}`}>{`${item[0].title} - ${item[0].autor}`}</Link></span>
        <span className="cantidad">{`${item[1]} unid.`}</span>
        <span className="precio">{`$ ${item[0].price*item[1]}`}</span>
        <span className="eliminar"><i className="fas fa-times" onClick={()=>removeItem(item[0].id)}></i></span>
        </div>
        <hr />
        </div>

    ));

       
    return(
        <>
        <div className="contenedor">
        <div className="cartcontainter">
        {cart.length<1 ? <div>
           <h2>No hay productos en el carro de compras</h2>
           <Link to="/"> 
           <i id="homeicon" className="fas fa-home"></i>
           </Link>
        </div>
            
            :

            <div>
            <h1>CARRO DE COMPRAS</h1>        
            <div className="tableCart">{cartItems}</div>
                <div className="importeTotal">
                    <h3>Importe TOTAL: $ {total}</h3>
                </div>
                <div className="emptyCart" onClick={clear}> Vaciar carro de compra</div> 
            </div> 
            
        }
        </div>
        </div>
        </>
    )

}

export default Cart
