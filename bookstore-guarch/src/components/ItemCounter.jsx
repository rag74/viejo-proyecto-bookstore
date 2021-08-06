import React, { useEffect, useState } from 'react';
import './ItemCounter.css';


function ItemCounter ({ initial, stock , onAdd }) {

    const [userSelected, setUserSelected] = useState(initial);

    
    const increment = ()=> {
        if (userSelected < stock) {setUserSelected(userSelected+1)} 
    };

    const decrement = ()=> {
        if (userSelected > 1) {setUserSelected(userSelected-1)}
    };


    const handleCarro = (event)=>{onAdd(userSelected, setUserSelected, initial)}


    return (
        <>
        <div className="contenedorProducto">
            <div className="cardProducto">
                <div className="fichaProducto">
                    Ficha de Produtos
                </div>
                <div className="counter">
                    <div className="buttonD" onClick={()=>decrement()}>-</div>
                    <div className="cantidad">{userSelected}</div>
                    <div className="buttonI"onClick={()=>increment()}>+</div>
                </div>
            </div>
            <div className="buttonAdd" onClick={handleCarro}>
                Agregar al carrito
            </div>
            <div id="accion" className="">.</div>
        </div>
        </>
    )

}


export default ItemCounter