import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        if (window.innerWidth < 1024) {
            setClick(!click)
        } else {setClick(false)}
    };
    

    return(
        <header>
        <div className="contenedor">
            
        <i className="fas fa-book-open libro"></i>
        <h1>BOOKSTORE</h1>
        <div className="burger" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <nav className={click ? "menu fold" : "menu"} onClick={handleClick}>
            <a href="#">Novedades</a>
            <a href="#">Los más vendidos</a>
            <a href="#">Catálogo</a>
            <a href="#">Sucursales</a>
            <a href="#">Contacto</a>
        </nav>
        </div>
    </header>
);

}


    export default Navbar;