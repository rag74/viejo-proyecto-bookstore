import React, { useEffect, useState } from "react";
import './Item.css';

function Item ({id , title , price , pictureUrl}) {


    return (
       <div className="card">
           <img src={pictureUrl} alt="" />
           <div>{title}</div>
           <div>$ {price}</div>
       </div>
    )


}

export default Item