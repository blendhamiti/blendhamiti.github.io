import React from 'react';
import { Zoom } from 'react-reveal';

import PageTitle from '../components/pageTitle';
import certsData from '../assets/config/certificates.json';

function Certificates() {
    const [selectedCert, setSelectedCert] = React.useState(null);

    const elements = certsData.certificates.map((element, index) =>
        <Certificate
            title={element.title}
            url={element.url}
            selectCert={setSelectedCert}
            key={index} />
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
        </div>
    );
}

function Certificate(props) {
    return (
        <div
            className="img-container"
            onClick={() => props.selectCert(props.url)}>
            <Zoom>
                <img
                    className="img-fluid certificates-thumbnail"
                    src={props.url}
                    alt={props.title} />
            </Zoom>
        </div>
    );
}

export default Certificates;
