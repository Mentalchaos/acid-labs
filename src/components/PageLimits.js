import React from 'react';

const PageLimits = ({ changePage, actualPage }) => {
    return (
        <div className="container-page-limits">
            { actualPage > 1 && <button id="previous" onClick={changePage} className="previous-page">{`${"<"}`}</button> }
            { actualPage < 3 &&<button id="next" onClick={changePage} className="next-page">{`${">"}`}</button> }
            <p> { actualPage } </p>
        </div>
    )
}

PageLimits.displayName = 'PageLimits';

export default PageLimits;