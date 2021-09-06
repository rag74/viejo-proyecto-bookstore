import React, { useState , useEffect } from 'react';
import { collection, query, where, getDocs, } from "firebase/firestore";
import db from '../../firebase'


function Pruebas() {

    const [productos, setProductos] = useState();
    const [item, setItem] = useState([]);

    const id2 = "9788481364750"

    useEffect(()=>{
        async function searchItem() {
            const q = query(collection(db, "items"), where("isbn", "==", id2));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            });
        }
        searchItem()
    },[]);

    

/*
    const id2 = "9788481364750"


    useEffect(()=>{
      setearItem()
        async function setearItem() {
          const arr = []
          const q = query(collection(db, "items"), where("isbn", "==", id2))
          const querySnapshot = await getDocs(q);
        querySnapshot.forEach(item => {arr.push(item.data());})
        console.log(arr)
        setItem(arr);
        }
  
    },[]);

console.log(`Asi quedo defindo item en Prueba:`)
console.log(item)
*/

//////////////////////////////////

    // USEFFECT PARA BUSQUEDA FIREBASE CTAEGORIAS 
    /*

    const categoria = null;

    useEffect(() => {
            async function getProductos() {
                const arr = []

                if(categoria!=null) {
            
                    const q = query(collection(db, "items"), where("categoria", "array-contains", (categoria)))
                    const querySnapshot = await getDocs(q);
                    
                    querySnapshot.forEach(item => {
                    arr.push(item.data());
                    })

                    console.log(arr);
                    setProductos(arr);

                } else {
                    const querySnapshot = await getDocs(collection(db, "items"));
                    querySnapshot.forEach((item) => {
                        arr.push(item.data());
                        });
                        console.log(arr);
                        setProductos(arr);
                }}

            getProductos()  
            
        }, [categoria]);

        console.log(`Estos son los productos ${productos}`)*/

        return (
            <>
            </>
        )
}

export default Pruebas