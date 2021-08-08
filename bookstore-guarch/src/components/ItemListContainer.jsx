import React from 'react';
import './ItemListContainer.css';
import ItemCounter from './ItemCounter';

function ItemListContainer() {

  const onAdd = (userSelected, setUserSelected, initial)=> {
    console.log("genial! Agregamos al carro "+userSelected)
    setUserSelected(initial);
    const element = document.getElementById("accion");
    element.innerHTML = "Productos agregados: "+userSelected;
    element.className = "agregado";
    setTimeout(()=>{element.innerHTML = ".";element.className = ""},1500);
    };



  return (
    <div className="catalogo"> 
    <div className="contenedor">
    <h1>CATALOGO</h1>     
    <ItemCounter 
    stock={5} 
    initial={1}
    onIncrease={ () => setValue( value + 1 ) } 
    onAdd={onAdd}
    />
    </div>
    </div>
  );
}

export default ItemListContainer