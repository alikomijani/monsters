import React, { Component } from 'react'

export class Search extends Component {
    render() {
        const { search, handleChange } = this.props;
        return (
            <div className='search-group'>
                <label htmlFor={'search'}>search</label>
                <input id='search' name={'search'} onChange={handleChange} value={search} />
            </div>
        )
    }
}

export default Search
