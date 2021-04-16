import React from 'react';

import AbilitiesList from '../Abilities/AbilitiesList';
import Header from '../Header/Header';
import ItemList from '../Item/ItemList';

import './Sheet.css';

export default function Sheet(props) {
    return (
        <div className="row">
            <AbilitiesList />
            <Header />
            <ItemList />
        </div>  
    );
}