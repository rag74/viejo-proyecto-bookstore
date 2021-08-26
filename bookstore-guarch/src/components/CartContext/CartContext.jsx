import React, { createContext, useState , useEffect , useMemo} from 'react';

const CartContext = React.createContext();

export function CartProvider(props) {

  const [cart, setCart] = useState([]);
  const [isInCart, setisInCart] = useState(false)

  const addItem = element=> {
    console.log
    setCart([ ...cart, element ]);
  }

  const checkCartId = ()=> {

  }

const value = useMemo (()=>{
    return({
      // poner const y func
      cart,
      addItem,
      isInCart
    })

},[cart])

return <CartContext.Provider value={value} {...props} />

}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}

