import React, { useContext, useState } from 'react';
import { RecipeContext } from './RecipeContext';

const NewRecipeForm = () => {
  const { dispatch } = useContext(RecipeContext);
  const [title, setTitle] = useState('');
  const [recipeURL, setRecipeURL] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_RECIPE', book: { title, recipeURL }});
    setTitle('');
    setRecipeURL('');
  }

  return (
    <form onSubmit={handleSubmit} className = 'recipe-form'>
      <input type="text" placeholder="Recipe title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />

      <input type="text" placeholder="Recipe URL" value={recipeURL}
        onChange={(e) => setRecipeURL(e.target.value)} required />     
      
       <input type="submit" value="add recipe" />
    </form>
  );
}
 
export default NewRecipeForm;