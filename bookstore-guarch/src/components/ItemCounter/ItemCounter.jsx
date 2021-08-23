import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCounter.css';


function ItemCounter ({ initial, stock, id , onAdd }) {

    const [userSelected, setUserSelected] = useState(initial);

    
    const increment = ()=> {
        if (userSelected < stock) {setUserSelected(userSelected+1)} 
    };

    const decrement = ()=> {
        if (userSelected > 1) {setUserSelected(userSelected-1)}
    };


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
        </>
    )

}


export default ItemCounter

