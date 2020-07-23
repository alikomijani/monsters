import React  from 'react';
import {Link} from 'react-router-dom';
import './monster-card.scss';
export default function MonsterCard({ monster }) {

    return (
        <div className='monster-card'>
            <img className='profile' src={'https://api.adorable.io/avatars/256/Ali@adorable.png' + monster.id} alt='profile' />
            <Link to={`/monsters/${monster.id}`}>
            <h1>{monster.name}</h1>
            </Link>
            <p>{monster.email}</p>
        </div>
    )
}
