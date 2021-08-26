import React from "react"
import './Cart.css'
import {CartProvider, useCart} from '../CartContext/CartContext'

function Cart () {

    const {addToCart, cart} = useCart()

    const cartItems = cart.map((item)=>(

        <div key={item[0].id}>
        
       <h3> {`(${item[1]} unid.) ${item[0].title} - valor $ ${item[0].price}`} </h3>
        
        </div>

    ));

    return(
        <div>
        <div className="fila">{cartItems}</div>
        </div>
    )
}

export default Cart
