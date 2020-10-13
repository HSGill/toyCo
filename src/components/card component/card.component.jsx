import React from 'react';

import './card.styles.scss';
import Collection from '../Collection/Collection.component'

const Card = ({items})=>{
    return (
    <div className="card-container">
    {
     items.map(({id, ...itemProps})=>(

        <Collection key={id} {...itemProps}></Collection>
     
        
 ))
    }
   
        
    </div>)
}


export default Card;