import React from "react";

import * as styles from "./index.module.scss";

interface Props {
    title: string
    size?: string
    weight?: Any
}

const SectionTitle = ({ title, size, weight }: Props) => {

    return (<div>
        <div className={styles.titleHolder}>
                <span className={styles.title} style={{"fontSize": size, "fontWeight": weight}}>{title}</span>
            <hr />
        </div>
    </div>)
}

export default SectionTitle;