import React from 'react';
import '../css/all.css';

const Search = () => {
    return (
        <div className="container-search">
            <input type="text" placeholder="Search here..."/>
        </div>
    )
}

Search.displayName = 'Search';

export default Search;