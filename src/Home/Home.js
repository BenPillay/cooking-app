import React from 'react';
import ItemContextProvider from './ItemContext';
import NewItemForm from './NewItemForm';
import ItemNavbar from './ItemNavbar';
import ItemList from './ItemList';

function Home(){
    return(
        <div className = "App">
            <ItemContextProvider>
            <ItemNavbar />
            <NewItemForm />
            <ItemList />
            </ItemContextProvider>
        </div>
    )
}

export default Home;