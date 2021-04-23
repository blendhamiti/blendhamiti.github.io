import React from "react";
import clsx from "clsx";

import PageTitle from "../components/pageTitle";

import styles from "./certificates.module.scss";

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
        <div className={styles.container} id="certificates">
            <PageTitle title="Certificates" />
            <div className={styles.content}>{elements}</div>
            <div
                className={styles.overlay}
                onClick={() => setSelectedCert(null)}
                className={clsx(selectedCert && styles.open)}
                style={{ backgroundImage: `url(${selectedCert})` }}
            ></div>
        </div>
    );
}

function Certificate(props) {
    return (
        <div
            className={styles.item}
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
