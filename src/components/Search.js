import React from 'react';
import '../css/all.css';

const Search = ({ filteredData }) => {
    return (
        <div className="container-search">
            <input onChange={filteredData} type="text" defaultValue="" placeholder="Search..."/>
        </div>
    )
}

Search.displayName = 'Search';

export default Search;