import React from 'react';
import './App.css';
import Menu from './components/menu component/menu.component.jsx';
import Shop from './pages/shop/shop.component.jsx';
import Home from'./pages/Home/home.component.jsx';
import Contact from  './pages/contact/contact.component.jsx';
import {  Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path='/' component= {Home} exact />
        <Route path='/shop' component= {Shop}/>

        <Route path='/contact' component= {Contact}/>

      </Switch>

      


     </div>
  );
}

export default App;
