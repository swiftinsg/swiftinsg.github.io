import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styles from "./index.module.scss";

function ReadMore() {

    return (<>
        <div className={styles.readMore} onClick={() => window.scroll({ top: window.innerHeight - 95, behavior: 'smooth' })}>
            <span>Read more</span>
            <FontAwesomeIcon icon={["fas", "arrow-down"]} />
        </div>
    </>);
}

export default ReadMore;