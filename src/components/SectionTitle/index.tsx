import React from "react";

import * as styles from "./index.module.scss";

interface Props {
    title: string
}

const SectionTitle = ({ title }: Props) => {

    return (<div className={styles.titleHolder}>
        <span className={styles.title}>{title}</span>
    </div>)
}

export default SectionTitle;