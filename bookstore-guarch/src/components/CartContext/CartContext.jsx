import React, { createContext, useState , useEffect , useMemo} from 'react';
import Item from '../Item/Item';

const CartContext = React.createContext();

export function CartProvider(props) {

  const [cart, setCart] = useState([]);
  
  const [isInCart, setisInCart] = useState();

  const clear = ()=> {
      setCart([])
  }

  const removeItem = id=> {
      let cartCopy = cart
      console.log(cartCopy)
      cartCopy = cartCopy.filter((cartitem) => cartitem[0].id !== id)
      setCart(cartCopy)
  }

  /*const addItem = ([{item, userSelected}])=> {
    setCart([ ...cart, [{item, userSelected}]]);
  }*/


  //esto funciona con formula vieja
  const addItem = element=> {
    setCart([ ...cart, element]);
    console.log(`Valor de isInCart: ${isInCart}`);
  }



  const checkCartId = (id, item, userSelected)=> {
      let inCart
      inCart = cart.map((arr) => arr[0].id).includes(id);   //map((prod)=>prod[0].id.includes(id))
      setisInCart(inCart);
      console.log(`${id} - ${inCart}`);
      inCart ? console.log("Este producto ya esta en el carro") : addItem([item , userSelected])

      /*!inCart ? addItem([item,userSelected]) : console.log("ya esta en el carro!")
      //console.log(cart)*/ //PEDAZO A AGREGAR LUEGO DE RESOLVER EL CATCH
  }
  //

const value = useMemo (()=>{
    return({
      // poner const y func
      cart,
      addItem,
      isInCart,
      clear,
      removeItem,
      checkCartId
    })

},[cart, isInCart])

return <CartContext.Provider value={value} {...props} />

}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}
