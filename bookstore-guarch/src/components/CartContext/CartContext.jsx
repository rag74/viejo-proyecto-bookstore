import React, { createContext, useState , useEffect , useMemo} from 'react';
import Item from '../Item/Item';

const CartContext = React.createContext();

export function CartProvider(props) {

  const [cart, setCart] = useState([]);
  
  const [isInCart, setisInCart] = useState();

  var alertMessage

  const clear = ()=> {
      setCart([])
  }

  const removeItem = id=> {
      let cartCopy = cart
      console.log(cartCopy)
      cartCopy = cartCopy.filter((cartitem) => cartitem[0].id !== id)
      setCart(cartCopy)
  }



  const checkCartId = (id, item, userSelected, setUserSelected)=> {
      let inCart
      inCart = cart.map((arr) => arr[0].id).includes(id);  
      setisInCart(inCart);
      console.log(`${id} - ${inCart}`);
      inCart ? console.log("Este producto ya esta en el carro") : addItem([item , userSelected]);
      inCart ? alertMessage=(`Ya esta en su carrito`) : alertMessage=(`(${userSelected}) Productos agregados`);
      onAdd (userSelected, setUserSelected, id, alertMessage)
  }
  
  const addItem = element=> {
    setCart([ ...cart, element]);
    console.log(`Valor de isInCart: ${isInCart}`);
  }

  /*const addItem = ([{item, userSelected}])=> {
    setCart([ ...cart, [{item, userSelected}]]);
  }*/

  const onAdd = (userSelected, setUserSelected, id, alertMessage)=> {
    setUserSelected(1);
    let element = document.getElementById(id+"agregado");
    element.innerHTML = alertMessage;
    element.className = "agregado";
    setTimeout(()=>{element = document.getElementById(id+"counter"); element.className = "dispnone"},1000);
    setTimeout(()=>{element = document.getElementById(id+"terminar"); element.classList.remove("dispnone");},1000);
    };



const value = useMemo (()=>{
    return({
      // poner const y func a pasar
      cart,
      addItem,
      isInCart,
      clear,
      removeItem,
      checkCartId,
      onAdd
    })

},[cart, isInCart])

return <CartContext.Provider value={value} {...props} />

}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}
