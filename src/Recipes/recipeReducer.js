import uuid from 'uuid/v4';

export const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, {
        title: action.book.title, 
        recipeURL : action.book.recipeURL, 
        id: uuid()}
      ]
    case 'REMOVE_RECIPE':
      return state.filter(recipe => recipe.id !== action.id);
    default:
      return state;
  }
} 