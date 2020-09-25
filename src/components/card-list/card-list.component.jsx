import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {
            props.monsters.map(item => <Card key={item.id} monster={item} />)
        }
    </div>
);