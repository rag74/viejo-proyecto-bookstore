import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cartwidget from '../Cartwidget/Cartwidget'

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
        <Link to="/">   
        <i className="fas fa-book-open libro"></i>
        <h1>BOOKSTORE</h1>
        </Link>
        <div className="burger" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <Cartwidget/>
        <nav className={click ? "menu fold" : "menu"} onClick={handleClick}>
            <Link to="/novedades">Novedades</Link>
            <Link to="/masvendidos">Los más vendidos</Link>
            <Link to="/">Catálogo</Link>
            <Link to="/">Contacto</Link>
        </nav>
        
        </div>
    </header>
);

}


/*preguntar:

onClick={()=>handleClick()}

o

onClick={handleClick}  */

    export default Navbar;