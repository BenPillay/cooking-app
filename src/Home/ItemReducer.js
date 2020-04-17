import uuid from 'uuid/v4';

export const ItemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, {
        title: action.item.title, 
        imgURL : action.item.imgURL, 
        units : action.item.units,
        quantity : action.item.quantity,
        id: uuid()}
      ]
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
} 