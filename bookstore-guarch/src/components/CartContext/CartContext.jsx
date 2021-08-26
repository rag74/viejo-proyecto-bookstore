import React, { createContext, useState , useEffect , useMemo} from 'react';

const CartContext = React.createContext();

export function CartProvider(props) {

  const [carto, setCart] = useState([]);

  const addToCart = element => {
    setCart([ ...carto, element ]);
  }


const value = useMemo (()=>{
    return({
      // poner const y func
    })

},[])

return <CartContext.Provider value={value} {...props} />

}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}

