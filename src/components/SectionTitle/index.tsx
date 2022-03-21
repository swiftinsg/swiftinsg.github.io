import React from "react";

import * as styles from "./index.module.scss";

interface Props {
    title: string
}

const SectionTitle = ({ title }: Props) => {

    return (<div>
        <div className={styles.titleHolder}>
            <span className={styles.title}>{title}</span>
            <hr />
        </div>
    </div>)
}

export default SectionTitle;