import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ filteredData }) => {
    return (
        <div className="container-search">
            <input onChange={filteredData} type="text" defaultValue="" placeholder="Search..."/>
        </div>
    )
}

Search.propTypes = {
    Search: PropTypes.array,
};

Search.displayName = 'Search';

export default Search;