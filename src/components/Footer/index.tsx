import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from "./index.module.scss";

function Footer() {

    return (<>
        <footer className={styles.footer}>
            <span>&copy; 2021 Swift Innovators' Summit. All rights reserved.</span>
            <div>
                <a target="_blank" href="https://www.instagram.com/swiftinsg/"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                <a target="_blank" href="https://twitter.com/swiftinsg"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                <a target="_blank" href="mailto:hello@swiftinsg.org"><FontAwesomeIcon icon={["far", "envelope"]} /></a>
            </div>
        </footer>
    </>);
}

export default Footer;