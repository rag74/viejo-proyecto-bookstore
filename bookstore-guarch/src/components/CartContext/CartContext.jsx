import React, { createContext, useState , useEffect , useMemo} from 'react';
import { collection, query, where, getDocs, updateDoc , doc } from "firebase/firestore";
import db from '../../firebase'
import Item from '../Item/Item';

const CartContext = React.createContext();

export function CartProvider(props) {

  const [cart, setCart] = useState([]);

  const user = {name: "Rodrigo Guarch", phone: "+54 9 1162703434", mail: "rguarch@gmail.com"};

  var alertMessage

  const clear = ()=> {
      setCart([])
  }

  const removeItem = id=> {
      let cartCopy = cart
      cartCopy = cartCopy.filter((cartitem) => cartitem[0].id !== id)
      setCart(cartCopy)
  }



  const checkCartId = (id, item, userSelected, setUserSelected, stock)=> {
      let inCart
      let remains
      inCart = cart.map((arr) => arr[0].id).includes(id);  
      remains = (stock - userSelected)
      inCart ? console.log("Este producto ya esta en el carro") : addItem([item , userSelected, remains]);
      inCart ? alertMessage=(`Ya esta en su carrito`) : alertMessage=(`(${userSelected}) Productos agregados`);
      onAdd (setUserSelected, id, alertMessage)
  }
  
  const addItem = element=> {
    setCart([ ...cart, element]);
  }


  const onAdd = (setUserSelected, id, alertMessage)=> {
    setUserSelected(1);
    let element = document.getElementById(id+"agregado");
    element.innerHTML = alertMessage;
    element.className = "agregado";
    setTimeout(()=>{element = document.getElementById(id+"counter"); element.className = "dispnone"},1000);
    setTimeout(()=>{element = document.getElementById(id+"terminar"); element.classList.remove("dispnone");},1000);
    };

    const  generateOrderNum = () => {
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let num1= 'BKSTR-';
      const charactersLength = characters.length;
      for ( let i = 0; i < 10; i++ ) {
          num1 += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return num1;
    }

   const stockControl = (remainingStock)=>{remainingStock.forEach((item)=>{async function updateItem() {
          const q = query(collection(db, "items"), where("id", "==", item.id));

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((document) => {
          console.log(document.id, " => ", document.data());
          const docRef = doc(db, "items", document.id)
          updateDoc(docRef, {stock: (item.remaining)}
          );
      })
      }
      updateItem()})
      } 
  

    


const value = useMemo (()=>{
    return({
      // poner const y func a pasar
      cart,
      addItem,
      clear,
      removeItem,
      checkCartId,
      onAdd,
      generateOrderNum,
      user,
      stockControl,
    })

},[cart])

return <CartContext.Provider value={value} {...props} />

}

export function useCart() {
  const context = React.useContext(CartContext);

  return context;
}
