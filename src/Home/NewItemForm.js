import React, { useContext, useState } from 'react';
import { ItemContext } from './ItemContext';

const NewItemForm = () => {
  const { dispatch } = useContext(ItemContext);
  const [title, setTitle] = useState('');
  const [units, setUnits] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imgURL, setImgURL] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', item: { title, units, quantity, imgURL }});
    setTitle('');
    setUnits('');
    setQuantity('');
    setImgURL('');
  }

  return (
    <form onSubmit={handleSubmit} className = 'note-form'>
      <input type="text" placeholder="Item name" value={title}
        onChange={(e) => setTitle(e.target.value)} required />

      <input type="text" placeholder="Item units" value={units}
        onChange={(e) => setUnits(e.target.value)} required />

      <input type="text" placeholder="Item quantity" value={quantity}
        onChange={(e) => setQuantity(e.target.value)} required /> 

      <input type="text" placeholder="Item image URL" value={imgURL}
        onChange={(e) => setImgURL(e.target.value)} required />     
       
       <input type="submit" value="Add Item" />
    </form>
  );
}
 
export default NewItemForm;