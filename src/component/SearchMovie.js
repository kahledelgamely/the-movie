import React from 'react'

function SearchMovie({ SearchValue, setSearchValue }) {
    return (
        <div>
            <input type="text"
                value={SearchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search"
            />
        </div>
    )
}

export default SearchMovie