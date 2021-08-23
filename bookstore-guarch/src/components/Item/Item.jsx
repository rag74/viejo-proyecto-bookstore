import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import './Item.css';

function Item ({id , title , price , autor, stock, pictureUrl, categoria, onAdd}) {


    return (
       <div className="cardI">
           <Link to={`/item/${id}`}>
           <img src={pictureUrl} alt="" />
           <div className="cardtextI">
           <h3>$ {price}</h3>
           <p>{title} - {autor}</p>
           </div>
           </Link>

            <ItemCounter stock={stock} initial={1} id={id} onAdd={onAdd}/>   
                
                <div id={id+"terminar"} className="contenedorTerminar dispnone">
                    <Link to="/cart">
                    <div id={id+"buttonTerminar"} className="buttonTerminar">
                            Terminar mi compra
                    </div>
                    </Link>
                </div>
            
       </div>
    )


}

export default Item