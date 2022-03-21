import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../../../pages/styles/sis.module.scss";
import * as sisStyles from "./index.module.scss";

function sis2021() {
    return (<>
        <div className={styles.bannerHolder}>
            <div className={[styles.banner, sisStyles.bg].join(" ")} />
            <h1>Swift Innovators’ Summit 2022<br />Coming Soon!</h1>
        </div>
    </>)
}

export default sis2021;