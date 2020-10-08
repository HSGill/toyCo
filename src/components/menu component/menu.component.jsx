import React from 'react';
import './menu.styles..scss';

class Menu extends React.Component{
    constructor (props){
        super(props);
        this.state={
            route :''
        }

    }
    
    render(){
        return (
            <div className='menu-container'>
            <div className='logo'>Logo</div>
            <div>Shop</div>
            <div>Contact</div>
            </div>
        )
    }
}
 

export default Menu;