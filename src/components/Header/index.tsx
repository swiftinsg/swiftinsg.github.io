import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import * as styles from "./index.module.scss";

function Header({ startWhite }: { startWhite?: boolean }) {

    const [isBeyondScroll, setBeyondScroll] = useState(false);

    useEffect(() => {

        function onScroll(e) {
            let scroll = window.scrollY;
            setBeyondScroll(scroll > 25);
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (<>
        <header className={[styles.landingHeader, isBeyondScroll ? styles.beyondScroll : startWhite ? styles.startWhite : ""].join(" ")}>
          <div className={styles.swiftIcon} />
          <div className={styles.headerLinks}>
            <div className={styles.dropDown}>
              <Link to="/">Home</Link>
              <div className={styles.dropDownMenu}>
                <Link to="/tinkertanker">About Tinkertanker</Link>
                <Link to="/programme-outline">Programme Outline</Link>
              </div>
            </div>
            <Link to="/sis">Swift Innovators' Summit</Link>
            <Link to="/students">Students</Link>
            <Link to="/apps">Apps</Link>
            <Link to="/news">News</Link>
            <Link to="/joinus">Join Us</Link>
          </div>
        </header>
    </>);
}

export default Header;