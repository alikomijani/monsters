import React from 'react';
function Search ({ search, handleChange  }) {
        return (
            <div className='search-group'>
                <label htmlFor={'search'}>search</label>
                <input id='search' name={'search'} onChange={handleChange} value={search} />
            </div>
        )
}

export default Search
