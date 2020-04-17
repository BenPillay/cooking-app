import React, { useContext, useState } from 'react';
import { RecipeContext } from './RecipeContext';

const RecipeDetails = ({ recipe }) => {
  const { dispatch } = useContext(RecipeContext);
  return (
    <div className = 'recipe-note'>
    <div className="top">
        <h2 className="name">{recipe.title}</h2>
    </div>
    <div className="bottom">
        <a 
        href = {recipe.recipeURL}
        className = "myButton"
        >Go to page</a>
        <br></br>
        <a 
        href="#" 
        className ="myButton" 
        onClick={() => dispatch({ type: 'REMOVE_RECIPE', id: recipe.id })}
        value = 'delete button'
        >Delete</a>
      </div>   
    </div>
  );
}

export default RecipeDetails;