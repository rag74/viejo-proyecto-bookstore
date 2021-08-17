import React, { useEffect, useState } from "react";
import './ItemDetail.css';

function ItemDetail ({id , title , price , pictureUrl, description}) {


    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div className="cardtext">
           <h3>$ {price}</h3>
           <h3>{title}</h3>
           <p>Descripción: {description}</p>
           </div>
       </div>
    )


}

export default ItemDetail