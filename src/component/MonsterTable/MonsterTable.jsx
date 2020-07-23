import React from 'react';
import MonsterCard from '../MonsterCard/MonsterCard';
import Delete from '../delete/Delete';
import './monsterTable.scss';
import {Link} from 'react-router-dom';
function MonsterTable({ filteredMonsters, handleDelete }) {

    return (
        <div className='monster-grid'>
            {filteredMonsters.map((item) => (
                <div key={item.id}>
                    
                        <MonsterCard monster={item} />
                   
                    <Delete handleDelete={ handleDelete } id={item.id} />
                </div>
            ))}
        </div>
    )
}

export default MonsterTable;
