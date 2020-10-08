import React from 'react';
import './App.css';
import Menu from './components/menu component/menu.component.jsx';
import Shop from './pages/shop/shop.component.jsx';
import Home from'./pages/Home/home.component.jsx';
import Contact from  './pages/contact/contact.component.jsx';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Shop />
      <Contact />


     </div>
  );
}

export default App;
