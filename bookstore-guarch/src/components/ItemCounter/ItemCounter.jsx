import React, { useEffect, useState } from 'react';
import './ItemCounter.css';


function ItemCounter ({ initial, stock, id , onAdd }) {

    const [userSelected, setUserSelected] = useState(initial);

    
    const increment = ()=> {
        if (userSelected < stock) {setUserSelected(userSelected+1)} 
    };

    const decrement = ()=> {
        if (userSelected > 1) {setUserSelected(userSelected-1)}
    };

/*    const onAdd = (userSelected, setUserSelected, initial)=> {
        console.log("genial! Agregamos al carro "+userSelected)
        setUserSelected(initial);
        const element = document.getElementById(id);
        element.innerHTML = "Productos agregados: "+userSelected;
        element.className = "agregado";
        setTimeout(()=>{element.innerHTML = ".";element.className = "hidden"},1500);
        };*/

    const handleAdd = ()=>{onAdd(userSelected, setUserSelected, initial, id)}


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

        <div id={id+"terminar"} className="contenedorTerminar dispnone">
            <div id={id+"buttonTerminar"} className="buttonTerminar">
                    Terminar mi compra
            </div>
        </div>
        </>
    )

}


export default ItemCounter


/* ITEM COUNTER VIEJO - TIPO CARD
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
            <div className="buttonAdd" onClick={handleAdd}>
                Agregar al carrito
            </div>
            <div id="accion" className="">.</div>
        </div>
*/