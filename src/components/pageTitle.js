import React from "react";

import styles from "./pageTitle.module.scss";

function PageTitle(props) {
    return (
        <div className={styles.container}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default PageTitle;
