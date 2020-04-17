import React, { useContext } from 'react';
import ItemDetails from './ItemDetails';
import { ItemContext } from './ItemContext';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  return items.length ? (
    <div className="item-list">
        {items.map(item => {
          return ( <ItemDetails item={item} key={item.id} /> );
        })}
    </div>
  ) : (
    <div className="empty">No items in inventory</div>
  );
}

export default ItemList;