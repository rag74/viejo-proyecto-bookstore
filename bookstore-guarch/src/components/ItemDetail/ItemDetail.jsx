import React, { useEffect, useState } from "react";
import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter'

function ItemDetail ({id , title , price , autor, stock, pictureUrl, description, categoria}) {


    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div className="cardtext">
           <h3>$ {price}</h3>
           <h3>{title} - {autor}</h3>
           <p>Descripción: {description}</p>
           <ItemCounter stock={stock} initial={1} id={id} />
           </div>
       </div>
    )


}

export default ItemDetail