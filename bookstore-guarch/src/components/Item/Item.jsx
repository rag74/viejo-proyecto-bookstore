import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCounter from "../ItemCounter/ItemCounter";
import './Item.css';

function Item ({id , title , price , stock, pictureUrl, categoria}) {


    return (
       <div className="cardI">
           <Link to={`/${categoria}/${id}`}>
           <img src={pictureUrl} alt="" />
           <div className="cardtextI">
           <h3>$ {price}</h3>
           <p>{title}</p>
           </div>
           </Link>
           <ItemCounter stock={stock} initial={1} id={id} />
       </div>
    )


}

export default Item