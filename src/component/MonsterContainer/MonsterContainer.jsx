import React, { useState, useEffect } from 'react';
import MonsterTable from '../MonsterTable/MonsterTable';
import Search from '../Search/Search';
import './monster-container.scss';
export default function MonsterContainer() {

    const [monsters, setMonsters] = useState([]);
    const [search, setSearch] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleDelete = (id) => {
        setMonsters(monsters.filter(monster => monster.id !== id));
    }
    const getData = () => {
        console.log('1')
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
            setMonsters(data);
            console.log(data)
        })
    }
    useEffect(() => { getData(); }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }
    // const handleAddMonster = (obj) => {
    //     setMonsters([obj, ...monsters])
    // }
    // const toggleForm = () => {
    //     setShowForm(!showForm)
    // }
    let filteredMonsters = monsters.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
    return (
        <div className='monster-container'>
            <Search handleChange={handleChange} search={search} />
            {/* <button onClick={toggleForm}> {showForm ? "hide form" : "show form"} </button>
            {
                showForm ? <Form handleAdd={handleAddMonster} /> : null
            } */}
            <MonsterTable filteredMonsters={filteredMonsters} handleDelete={handleDelete} />
        </div>
    )
}
