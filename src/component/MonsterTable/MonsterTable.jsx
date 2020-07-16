import React, { Component } from 'react'
import MonsterCard from '../MonsterCard/MonsterCard';
import Delete from '../delete/Delete';
import './monsterTable.scss'
export class MonsterTable extends Component {
    render() {
        const {filteredMonsters , handleDelete }=this.props;
        return (
            <div className='monster-grid'>
                {filteredMonsters.map((item) => (
                    <div key={item.id}>
                        <MonsterCard monster={item} />
                        <Delete handleDelete={() => handleDelete(item.id)} />
                    </div>
                ))}
            </div>
        )
    }
}

export default MonsterTable
