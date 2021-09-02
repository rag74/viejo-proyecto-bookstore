import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cartwidget from '../Cartwidget/Cartwidget'
import {CartProvider, useCart} from '../CartContext/CartContext'

import { collection, query, where, getDocs  } from "firebase/firestore";
import db from '../../firebase'
import { useEffect } from "react";



function Navbar() {

    const {cart} = useCart()
    console.log(cart)

    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        if (window.innerWidth < 1024) {
            setClick(!click)
        } else {setClick(false)}
    };

    useEffect(() => {
        async function fetchdata() {
          const querySnapshot = await getDocs(collection(db, "items"));
          querySnapshot.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
          });
        }
        fetchdata()
      }, [])
      


    return(
        <header>
        <div className="contenedor">
        <Link to="/">   
        <i className="fas fa-book-open libro"></i>
        <h1>BOOKSTORE</h1>
        </Link>
        <div className="burger" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <Cartwidget/>
        <nav className={click ? "menu fold" : "menu"} onClick={handleClick}>
            <ul className="menunav">
            <li><Link to="/category/novedades">Novedades</Link></li>
            <li><Link to="/category/masvendidos">Los más vendidos</Link></li>
            <li><Link to="/">Catálogo</Link>
                <ul className="submenu">
                
                </ul>
            </li>
            <li><Link to="/">Contacto</Link></li>
            </ul>
        </nav>
        </div>
    </header>
);

}

export default Navbar