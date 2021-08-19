import React, { useEffect, useState } from "react";
import './ItemList.css';
import Item from '../Item/Item'


function ItemList ({productos, loading}) {


    return(
        
        <div className="contenedor">
        {loading ?
            <div className="loading">Cargando...</div> :
                <div className="grilla-prodI">
                {productos.map(item => {return <Item
                                                    key={item.id} 
                                                    id={item.id}
                                                    title={item.title}
                                                    price={item.price}
                                                    stock={item.stock}
                                                    categoria={item.categoria}
                                                    pictureUrl={item.pictureUrl}
                                                />
                                        })
                    };
                </div>
        }
        </div>
    )
    }

export default ItemList