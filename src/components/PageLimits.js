import React from 'react';
import PropTypes from 'prop-types';

const PageLimits = ({ changePage, actualPage, maxPage }) => {
    return (
        <div className="container-page-limits">
            { actualPage > 0 && <button id="previous" onClick={changePage} className="change-page-button">{`${"<"}`}</button> }
            { actualPage < maxPage - 1 && <button id="next" onClick={changePage} className="change-page-button">{`${">"}`}</button> }
            <p> { actualPage + 1 || 1 } </p>
        </div>
    )
}

PageLimits.propTypes = {
    changePage: PropTypes.func,
    handleChange: PropTypes.func,
    maxPage: PropTypes.number
};

PageLimits.displayName = 'PageLimits';

export default PageLimits;