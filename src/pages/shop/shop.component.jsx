import React from 'react';
import './shop.styles.scss';
import Card from '../../components/card component/card.component'
import SHOP_DATA from './Shop_DATA';

class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
         collections: SHOP_DATA
        } 
    }
render(){
    const {collections} =  this.state

    return (<div>
   {
       collections.map(({id,...otherPropsitems})=>(
           <Card key={id} {...otherPropsitems} ></Card>
       ))
   }
    </div>)
}
}

export default Shop;