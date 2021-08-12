import React, { useEffect, useState } from "react";
import './ItemList.css';
import Item from '../Item/Item'


function ItemList ({productos, loading}) {


    return(
        
        <div className="contenedor">
        <div className="loading">{loading===true && <div>Cargando...</div>}</div>
            <div className="grilla-prod">
            {productos.map(item => {return <Item
                                                key={item.id} 
                                                id={item.id}
                                                title={item.title}
                                                price={item.price}
                                                pictureUrl={item.pictureUrl}
                                            />
                                    })
                                }
            </div>
        </div>
    )
    
};


export default ItemList