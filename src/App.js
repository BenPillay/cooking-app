import React from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import Recipes from "./Recipes/Recipes";
import {Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Login} />
      <Route exact path = '/Home' component = {Home} />
      <Route exact path = '/Recipes' component = {Recipes} />
     
    </div>
  );
}

export default App;