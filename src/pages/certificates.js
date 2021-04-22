import React from "react";

import PageTitle from "../components/pageTitle";

function Certificates() {
    const [certificates, setCertificates] = React.useState([]);
    const [selectedCert, setSelectedCert] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/certificates.json")
            .then((response) => response.json())
            .then(
                (result) => setCertificates(result.certificates),
                (error) => console.log(error)
            );
    }, []);

    const elements = certificates.map((element, index) => (
        <Certificate
            name={element.name}
            path={element.path}
            selectCert={setSelectedCert}
            key={index}
        />
    ));

    return (
        <div className="certificates container" id="certificates">
            <div
                id="certificates-overlay"
                onClick={() => setSelectedCert(null)}
                className={selectedCert ? "open" : ""}
                style={{ backgroundImage: `url(${selectedCert})` }}
            ></div>
            <PageTitle title="Certificates" />
            <div className="row">{elements}</div>
        </div>
    );
}

function Certificate(props) {
    return (
        <div
            className="img-container"
            onClick={() => props.selectCert(props.path)}
        >
            <img
                className="img-fluid certificates-thumbnail"
                src={props.path}
                alt={props.name}
            />
        </div>
    );
}

export default Certificates;
