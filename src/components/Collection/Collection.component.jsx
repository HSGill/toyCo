import React from 'react';

import './Collection.styles.scss';


const Collection =({id , name,price,imageUrl}) =>{
    return (
        <div className="collection-container">
           <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
           <div className="content">
           <div>{price}</div>
            <div className="addtocart">Add To Cart</div>
           </div>
          

        </div>
    )
}

export default Collection;