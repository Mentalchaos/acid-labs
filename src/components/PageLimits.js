import React from 'react';

const PageLimits = ({ changePage, actualPage }) => {
    return (
        <div className="container-page-limits">
            { actualPage > 1 && <button id="previous" onClick={changePage} className="change-page-button">{`${"<"}`}</button> }
            { actualPage < 3 && <button id="next" onClick={changePage} className="change-page-button">{`${">"}`}</button> }
            <p> { actualPage } </p>
        </div>
    )
}

PageLimits.displayName = 'PageLimits';

export default PageLimits;