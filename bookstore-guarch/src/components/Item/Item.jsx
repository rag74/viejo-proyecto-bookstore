import React, { useEffect, useState } from "react";
import './Item.css';

function Item ({id , title , price , pictureUrl}) {


    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div className="cardtext">
           <h3>$ {price}</h3>
           <p>{title}</p>
           </div>
       </div>
    )


}

export default Item