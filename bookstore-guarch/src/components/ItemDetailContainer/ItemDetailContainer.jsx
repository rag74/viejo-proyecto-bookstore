import React, { useEffect, useState } from "react";
import './ItemDetailContainer.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import ItemDetail from "../ItemDetail/ItemDetail";

const lista = [
  {
    id: '1',
    title: 'Las primas - Aurora Venturini', 
    price: '1330',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_612431-MLA47061867291_082021-AC.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis tellus, semper id metus eget, elementum ultrices augue. Morbi eu urna nisi. Maecenas a dignissim ligula. Fusce leo urna, ultrices in nunc at, fringilla pellentesque dolor. Mauris nec euismod lectus. Aenean eget odio aliquet, venenatis elit eget, consectetur justo. Vivamus a ultricies est. Phasellus accumsan leo in nisl luctus, eu aliquet dolor scelerisque. Integer quis eros ut est porttitor consectetur bibendum ut eros. Nulla nulla nulla, eleifend eu turpis sed, facilisis elementum felis. Phasellus ut facilisis magna. In commodo justo metus, at fermentum odio malesuada id. Vestibulum dapibus ornare enim eu efficitur.',
  },
  
  {
    id: '2',
    title: 'Yo recordaré por ustedes - Juan Forn', 
    price: '1690',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_944021-MLA47066450597_082021-AC.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies et libero nec iaculis. Proin libero metus, sollicitudin tristique tellus eget, tincidunt vestibulum velit. Ut ut feugiat erat. Aenean purus turpis, elementum bibendum tincidunt eu, iaculis eget velit. Duis lobortis augue et libero tincidunt, sit amet aliquet nisl mattis. Nulla semper tellus elementum, vehicula mauris vitae, congue ligula. Nulla dictum orci non mattis sagittis. Nulla facilisi.',
  },

  {
    id: '3',
    title: 'Autobiografía de mi madre - Jamaica Kincaid', 
    price: '1200',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_627073-MLA47064940595_082021-AC.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur urna vitae est finibus, ac tempor dui elementum. Sed a ultrices nunc, ac pretium leo. Sed pretium, turpis vel consequat euismod, mi velit eleifend diam, id rutrum mi dolor quis justo. Duis condimentum dolor eget condimentum cursus. Aliquam aliquet dignissim massa vel vestibulum. Curabitur facilisis blandit felis eu pharetra. Nunc eget ipsum sit amet nulla porttitor sodales. Cras venenatis vitae massa non finibus. Quisque viverra, elit pulvinar semper luctus, orci massa luctus orci, id vulputate sapien lectus sit amet neque. Aenean maximus laoreet lacus ac tincidunt.',
  },

  {
    id: '4',
    title: 'Ensayos I - Lydia Davis', 
    price: '990',
    pictureUrl:'https://http2.mlstatic.com/D_Q_NP_796500-MLA47058660556_082021-AC.jpg',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas porta nunc, sed pretium nulla maximus sit amet. Vestibulum convallis libero diam, eget gravida ligula sollicitudin a. Quisque semper lorem eget ex posuere mattis. Phasellus condimentum erat eu ultricies tristique. Maecenas fringilla sed velit feugiat condimentum. Integer a magna eros. Curabitur ac nisi id lorem pulvinar luctus non quis lectus. Donec molestie libero in augue volutpat, id ornare risus commodo. Donec ac orci sit amet dolor tincidunt maximus. Sed consequat neque nec quam posuere, et tempor odio blandit. Donec dapibus, ex at tincidunt posuere, magna sapien porta mauris, eget ultricies tellus nulla at mauris. Sed egestas volutpat tincidunt. Aenean scelerisque placerat ex. Cras placerat turpis a tortor dignissim sodales. Nulla bibendum leo ipsum, imperdiet bibendum dolor tristique in.',
  },

];



function ItemDetailContainer() {


  const [itemD, setItem] = useState([]);
  const [loading, setLoading] = useState(true)


useEffect(()=>{
      const getItems = ()=> {
        return new Promise ((resolve, reject)=>{
          setTimeout (()=>{
            resolve(lista),
            reject(new Error('No hay productos'));
          },2000);
        })
      };


    setearItems()
      async function setearItems() {
        const traerItems = await getItems();
        const itemSelected = traerItems.find((traerItems) => traerItems.id === '2');
      console.log(itemSelected);
      setItem(itemSelected);
      setLoading(false)
      }

  },[]);



  console.log(itemD);
  console.log(loading);

  return (
    
       <div className="contenedor">
         {loading ? 
        <div className="loading">Cargando...</div> :
            <div className="grilla-prod">
            <ItemDetail key={itemD.id} id={itemD.id} title={itemD.title} price={itemD.price} pictureUrl={itemD.pictureUrl} description={itemD.description} />
            </div>
        }
        </div>
 
  );
}

export default ItemDetailContainer


/*            {itemD.map(item => {return <ItemDetail
                                                key={item.id} 
                                                id={item.id}
                                                title={item.title}
                                                price={item.price}
                                                pictureUrl={item.pictureUrl}
                                                description={item.description}
                                            />
                                    })
                                }
                                */