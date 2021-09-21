import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
import { useCart } from '../CartContext/CartContext'

function Cart () {

    const {cart, clear, removeItem} = useCart()

    const total = cart.reduce((accumulator, libro) => accumulator + (libro[0].price*libro[1]), 0);

    const cartItems = cart.map((item)=>(


        <div key={item[0].id}>
        <div id="cartRow">
        <span className="imagen"><Link to={`/item/${item[0].id}`}><img src={item[0].pictureUrl} alt=""/></Link></span>
        <span className="titulo"><Link to={`/item/${item[0].id}`}>{`${item[0].title} - ${item[0].autor}`}</Link></span>
        <span className="cantidadCart">{`${item[1]} unid.`}</span>
        <span className="precioCart">{`$ ${item[0].price*item[1]}`}</span>
        <span className="eliminar"><i className="fas fa-times" onClick={()=>removeItem(item[0].id)}></i></span>
        </div>
        <hr />
        </div>

    ));

       
    return(
        <>
        <div className="contenedor">
            <div className="cartcontainter">
                {cart.length<1 ?             
                    <div className="empty"> 
                        No hay productos en el carro de compras             
                        <Link className="backHome" to="/"> 
                            <p>Volver a la tienda</p>
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
                        <div className="cartButtons">
                            <div className="circle emptyCart" onClick={clear}><i className="fas fa-times"></i><p>vaciar carro</p></div>
                            <Link to="/">
                                <div className="circle back"><i class="fas fa-exclamation"></i><p>faltan cosas</p></div>
                            </Link>
                            <Link to="/payment">
                                <div className="circle pay"><i class="fas fa-check"></i><p>pagar</p></div>
                            </Link>
                        </div>

                    
                    </div> 
                    
                }
            </div>
        </div>
        </>
    )

}

export default Cart
