import React, { Component } from 'react'
import './monster-card.scss';
export default class MonsterCard extends Component {

    render() {
        const {monster} = this.props;
        return (
            <div className='monster-card'>
                <img className='profile' src={'https://api.adorable.io/avatars/256/Ali@adorable.png' + monster.id} alt='profile' />
                <h1>{monster.name}</h1>
                <p>{monster.email}</p>
            </div>
        )
    }
}
