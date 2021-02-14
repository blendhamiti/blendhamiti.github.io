import React from 'react';
import PageTitle from '../components/pageTitle'
import courseraMl from '../assets/misc/certs/coursera-ml.png';
import neo4j from '../assets/misc/certs/neo4j.png';
import nasa from '../assets/misc/certs/nasa.jpg';
import infomatrix from '../assets/misc/certs/infomatrix.jpg';

function Certificates() {
    const certs = [courseraMl, neo4j, nasa, infomatrix];
    const elements = certs.map((element) =>
        <Certificate cert={element} />
    );

    return (
        <div className="certificates container">
            <div id="certificates-overlay"></div>

            <PageTitle title="Certificates" />

            <div className="row">{elements}</div>
        </div>
    );
}

function Certificate(props) {
    return (
        <div className="img-container">
            <img className="img-fluid certificates-thumbnail" src={props.cert} alt="certificate" />
        </div>
    );
}

export default Certificates;
