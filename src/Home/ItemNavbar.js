import React, { useContext } from 'react';
import { ItemContext } from './ItemContext';

const ItemNavbar = () => {
  const { items } = useContext(ItemContext);
  return (
    <div className="navbar">
      <h1>Inventory</h1>
      <a 
      class="NavButton" 
      href = "/Recipes">Recipes</a>
    </div>
  );
}
 
export default ItemNavbar;