import React, { useContext, useState } from 'react';
import { ItemContext } from './ItemContext';

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  return (
    <div className = 'note'>
    <div className="top">
        <h2 className="name">{item.title}</h2>
        <img className = 'circle-img' src = {item.imgURL} alt = "alt.png" />
    </div>
    <div className="bottom">
        <label>Item Units : </label>
        <p className = 'info'>{item.units}</p>
        <label>Item QTY : </label>
        <p className = 'info'>{item.quantity}</p>

        <a 
        href="#" 
        class="myButton" 
        onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
        value = 'delete button'
        >Delete</a>
      </div>   
    </div>
  );
}

export default ItemDetails;