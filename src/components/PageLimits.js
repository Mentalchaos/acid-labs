import React from 'react';

const PageLimits = ({ changePage, actualPage, maxPage }) => {
    return (
        <div className="container-page-limits">
            { actualPage > 0 && <button id="previous" onClick={changePage} className="change-page-button">{`${"<"}`}</button> }
            { actualPage < maxPage - 1 && <button id="next" onClick={changePage} className="change-page-button">{`${">"}`}</button> }
            <p> { actualPage + 1 } </p>
        </div>
    )
}

PageLimits.displayName = 'PageLimits';

export default PageLimits;