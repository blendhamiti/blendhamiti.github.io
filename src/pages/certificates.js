import React from 'react';

import PageTitle from '../components/pageTitle'

import courseraMl from '../assets/misc/certs/coursera-ml.png';
import neo4j from '../assets/misc/certs/neo4j.png';
import nasa from '../assets/misc/certs/nasa.jpg';
import infomatrix from '../assets/misc/certs/infomatrix.jpg';

function Certificates() {
    const [selectedCert, setSelectedCert] = React.useState(null);

    const certs = [courseraMl, neo4j, nasa, infomatrix];
    const elements = certs.map((element, index) =>
        <Certificate cert={element} selectCert={setSelectedCert} key={index} />
    );

    return (
        <div className="certificates container" id="certificates">
            <div
                id="certificates-overlay"
                onClick={() => setSelectedCert(null)}
                className={(selectedCert) ? "open" : ""}
                style={{ backgroundImage: `url(${selectedCert})` }}>
            </div>
            <PageTitle title="Certificates" />
            <div className="row">{elements}</div>
        </div >
    );
}

function Certificate(props) {
    return (
        <div
            onClick={() => props.selectCert(props.cert)}
            className="img-container">
            <img className="img-fluid certificates-thumbnail" src={props.cert} alt="certificate" />
        </div>
    );
}

export default Certificates;
