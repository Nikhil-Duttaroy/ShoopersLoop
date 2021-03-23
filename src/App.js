import React from 'react'
import {Route ,Switch} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage/HomePage.components.jsx';
import ShopPage from './pages/Shop/ShopPage.components.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
