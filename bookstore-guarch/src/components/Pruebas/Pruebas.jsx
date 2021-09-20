import React, { useState , useEffect } from 'react';
import { collection, query, where, getDocs, updateDoc , doc } from "firebase/firestore";
import db from '../../firebase'


function Pruebas() {


useEffect(()=>{async function setInitStock(){
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((document) => {
      // doc.data() is never undefined for query doc snapshots
      let stockAleatorio = Math.floor(Math.random()*10)+5;
      console.log(document.id, " => ", document.data());
      const docRef = doc(db, "items", document.id)
      updateDoc(docRef, {stock: stockAleatorio}
    );
})
}
setInitStock()
},[]);
/*
    const [productos, setProductos] = useState();
    const [item, setItem] = useState([]);
    const orderi = [
    {
        "id": "9788433980847",
        "title": "Yoga",
        "price": 1595,
        "cantidad": 12
    },
    {
        "id": "9788496594333",
        "title": "Las primas",
        "price": 1330,
        "cantidad": 7
    },
    {
        "id": "9789877122305",
        "title": "Ensayos I",
        "price": 990,
        "cantidad": 3
    },
    {
        "id": "9788481364750",
        "title": "Autobiografía de mi madre",
        "price": 1200,
        "cantidad": 3
    },
    {
        "id": "9789500440950",
        "title": "Yo recordaré por ustedes",
        "price": 1690,
        "cantidad": 6
    }
]
    console.log(orderi)
    orderi.forEach((orderi)=>{async function searchItem() {
        const q = query(collection(db, "items"), where("isbn", "==", orderi.id));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((document) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(document.id, " => ", document.data());
        const docRef = doc(db, "items", document.id)
        updateDoc(docRef, {stock: (orderi.cantidad)}
        );
    })
}
searchItem()})

    const id2 = "9788481364750"*/

/////////////////////////////////////

/*
    useEffect(()=>{
        async function searchItem() {
            const q = query(collection(db, "items"), where("isbn", "==", orderi[0].id));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((document) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(document.id, " => ", document.data());
            const docRef = doc(db, "items", document.id)
            updateDoc(docRef, {stock: (orderi[0].cantidad)}
            );
        })
    }
    searchItem()
},[]);
*/
    

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