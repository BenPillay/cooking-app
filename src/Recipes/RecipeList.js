import React, { useContext } from 'react';
import RecipeDetails from './RecipeDetails';
import { RecipeContext } from './RecipeContext';

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);
  return recipes.length ? (
    <div className="book-list">
        {recipes.map(recipe => {
          return ( <RecipeDetails recipe = {recipe} key={recipe.id} /> );
        })}
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
}

export default RecipeList;