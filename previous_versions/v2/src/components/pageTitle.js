import React from 'react';

function PageTitle(props) {
    return (
        <div className="row pb-3">
            <div className="col">
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}

export default PageTitle;
