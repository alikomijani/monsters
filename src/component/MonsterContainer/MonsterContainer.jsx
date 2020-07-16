import React, { Component } from 'react';

import Form from '../Form/Form';
import MonsterTable from '../MonsterTable/MonsterTable';
import Search from '../Search/Search';
import './monster-container.scss';
export default class MonsterContainer extends Component {
    constructor(props) {
        super(props);
        console.log('constractor is loaded!');
        this.state = {
            monsters: [],
            search: '',
            showForm: false
        }
    }
    handleDelete = (id) => {
        const { monsters } = this.state;
        this.setState({ monsters: monsters.filter(monster => monster.id !== id) });
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
            this.setState({ monsters: data })
        })
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleAdd = (obj) => {
        this.setState({ monsters: [obj, ...this.state.monsters] })
    }
    toggleForm = () => {
        this.setState(
            { showForm: !this.state.showForm }
        )
    }
    render() {
        const { monsters, search, showForm } = this.state;
        let filteredMonsters = monsters.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
        return (
            <div className= 'monster-container'>
                <Search handleChange={this.handleChange} search={search} />
                <button onClick={this.toggleForm}> {showForm ?  "hide form":"show form" } </button>
                {
                    showForm ? <Form handleAdd={this.handleAdd} /> : null
                }
                <MonsterTable filteredMonsters={filteredMonsters} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
