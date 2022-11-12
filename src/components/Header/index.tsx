import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./index.module.scss";

let links = [
  { href: "/about", name: "About" },
  { href: "/sis", name: "Swift Innovators' Summit" },
  { href: "/students", name: "Students" },
  { href: "/apps", name: "Apps" },
  { href: "/news", name: "News & Achievements" },
  { href: "/joinus", name: "Join Us" },
];

function Header({ startWhite }: { startWhite?: boolean }) {
  const [isBeyondScroll, setBeyondScroll] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function onScroll(e) {
      let scroll = window.scrollY;
      setBeyondScroll(scroll > 25);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={[
          styles.landingHeader,
          isBeyondScroll
            ? styles.beyondScroll
            : startWhite
            ? styles.startWhite
            : "",
        ].join(" ")}
      >
        <Link to="/">
          <div className={styles.swiftIcon} />
        </Link>
        <div className={styles.headerLinks}>
          {/*<div className={styles.dropDown}>
              <Link to="/">Home</Link>
              <div className={styles.dropDownMenu}>
                <Link to="/tinkertanker">About Tinkertanker</Link>
                <Link to="/programme-outline">Programme Outline</Link>
              </div>
            </div>*/}
          {links.map((link) => (
            <Link to={link.href}>{link.name}</Link>
          ))}
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            onClick={() => setDrawerOpen((c) => !c)}
          />
          <div
            className={styles.drawer}
            style={{ width: isDrawerOpen ? "100vw" : "0px" }}
          >
            <a
              href="javascript:void(0)"
              className={styles.closeBtn}
              onClick={() => setDrawerOpen(!isDrawerOpen)}
            >
              &times;
            </a>
            {links.map((link) => (
              <Link style={{whiteSpace: "nowrap"}} to={link.href}>{link.name}</Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
