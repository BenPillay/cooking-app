import React from 'react';
import RecipeContextProvider from './RecipeContext';
import NewRecipeForm from './NewRecipeForm';
import RecipeNavbar from './RecipeNavbar';
import RecipeList from './RecipeList';

function Recipes(){
    return(
        <div className = "App">
            <RecipeContextProvider>
            <RecipeNavbar />
            <NewRecipeForm />
            <RecipeList />
            </RecipeContextProvider>
        </div>
    )
}

export default Recipes;