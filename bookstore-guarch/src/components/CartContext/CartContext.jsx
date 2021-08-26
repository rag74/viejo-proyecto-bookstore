import React, { createContext, useState , useEffect , useMemo} from 'react';

const CartContext = React.createContext();

export function CartProvider(props) {

  const [cart, setCart] = useState([]);

  const addToCart = element=> {
    setCart([ ...cart, element ]);
  }


const value = useMemo (()=>{
    return({
      // poner const y func
      cart,
      addToCart
    })

},[cart])

return <CartContext.Provider value={value} {...props} />

}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}

