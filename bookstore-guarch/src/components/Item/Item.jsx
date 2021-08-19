import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import './Item.css';

function Item ({id , title , price , autor, stock, pictureUrl, categoria}) {


    return (
       <div className="cardI">
           <Link to={`/item/${id}`}>
           <img src={pictureUrl} alt="" />
           <div className="cardtextI">
           <h3>$ {price}</h3>
           <p>{title} - {autor}</p>
           </div>
           </Link>
           <ItemCounter stock={stock} initial={1} id={id} />
       </div>
    )


}

export default Item