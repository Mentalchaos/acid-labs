import React from 'react';

const PageLimits = () => {
    return (
        <div className="container-page-limits">
            <button className="previous-page">{`${"<"}`}</button>
            <button className="next-page">{`${">"}`}</button>
        </div>
    )
}

PageLimits.displayName = 'PageLimits';

export default PageLimits;