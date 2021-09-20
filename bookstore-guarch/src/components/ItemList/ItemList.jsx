import React, { useState } from "react";
import './ItemList.css';
import Item from '../Item/Item'

import { useParams } from "react-router-dom";


function ItemList ({productos, loading}) {

    const {categoria, id} = useParams()

const [loopNum, setloopNum] = useState(8)

const loadMore = ()=> {
    if (loopNum < productos.length) {setloopNum(loopNum+8)}
};

console.log(productos.length)
    return(
        
        <div className="contenedor">
        {loading ?
            <div className="loading">Cargando...</div> :
            <div>
                <div className="grilla-prodI">
                {
                productos.slice(0, loopNum).map(item => {return <Item
                                                    key={item.id} 
                                                    id={item.id} 
                                                    title={item.title}
                                                    autor={item.autor}
                                                    price={item.price}
                                                    stock={item.stock}
                                                    pictureUrl={item.pictureUrl}
                                                    item={item}
                                                />
                                        })
                    }
                </div>
                <div className={(loopNum<productos.length) ? "more" : "hidden" } onClick={()=>loadMore()}><p>cargar mas...</p></div>
            </div>
        }
        </div>
    )
    }

export default ItemList