import React, { useEffect, useState } from "react";
import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter'

function ItemDetail ({id , title , price , autor, stock, pictureUrl, description, categoria}) {

    const onAdd = (userSelected, setUserSelected, initial, id)=> {
        console.log("genial! Agregamos al carro "+userSelected)
        setUserSelected(initial);
        let element = document.getElementById(id+"agregado");
        element.innerHTML = "Productos agregados: "+userSelected;
        element.className = "agregado";
        setTimeout(()=>{element.innerHTML = ".";element.className = "hidden"},1000);
        setTimeout(()=>{element = document.getElementById(id+"counter"); element.className = "dispnone"},1000);
        setTimeout(()=>{element = document.getElementById(id+"terminar"); element.classList.remove("dispnone");},1000);
        };

    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div className="cardtext">
           <h3>$ {price}</h3>
           <h3>{title} - {autor}</h3>
           <p>Descripción: {description}</p>
           <ItemCounter stock={stock} initial={1} id={id} onAdd={onAdd}/>
           </div>
       </div>
    )


}

export default ItemDetail