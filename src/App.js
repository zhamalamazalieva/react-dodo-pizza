import React from 'react';
import Home from './pages/home';
import Cart from './pages/cart';
import Header from './components/header';
import './assets/scss/app.scss';
import {Route} from 'react-router-dom';

function App() {
  return (
     <div className="wrapper">
     <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cart" component={Cart}/>
     </div>
  );
}

export default App;
