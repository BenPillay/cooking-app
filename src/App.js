import React from 'react';
import Home from './Home/Home';
import Login from './Login/Login';
import Recipes from "./Recipes/Recipes";
import Register from "./Register/Register";
import {Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Login} />
      <Route exact path = "/Register" component = {Register} />
      <Route exact path = '/Home' component = {Home} />
      <Route exact path = '/Recipes' component = {Recipes} />
     
    </div>
  );
}

export default App;