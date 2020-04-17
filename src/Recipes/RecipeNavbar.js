import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext';

const RecipeNavbar = () => {
  const { recipes } = useContext(RecipeContext);
  return (
    <div className="navbar">
      <h1>Recipes</h1>
      <a 
      class="NavButton" 
      href = "/Home">Inventory</a>
    </div>
  );
}
 
export default RecipeNavbar;