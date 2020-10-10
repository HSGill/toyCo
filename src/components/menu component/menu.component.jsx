import React from 'react';
import './menu.styles..scss';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png'
import { ReactComponent as Logo } from '../../assets/LOGO.png'

const Menu = () =>{
    return (
        <div className='menu-container'>
        <Link className="logo-container" to="/"><img src={LOGO} alt="logo"></img></Link>
        <div className="options" >
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
        </div>
        </div>
    )
}

export default Menu;