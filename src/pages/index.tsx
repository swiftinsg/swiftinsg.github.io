import * as React from "react";
import * as styles from "./styles/index.module.scss";

import { Link, PageProps } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../components/SectionTitle";

// markup
const IndexPage = (props: PageProps) => {
  console.log(styles.main);
  return (
    <main className={styles.main}>
      <section className={[styles.section, styles.sectionOne].join(" ")}>
        <header className={styles.landingHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link to="/" style={{ marginLeft: 0, height: "8vh", width: "8vh" }}>
              <div className={styles.swiftIcon} />
            </Link>
          </div>
          {/*<div className={styles.dropDown}>
            <Link to="/">Home</Link>
            <div className={styles.dropDownMenu}>
              <Link to="/tinkertanker">About Tinkertanker</Link>
              <Link to="/programme-outline">Programme Outline</Link>
            </div>
          </div>*/}
          <Link to="/about">About</Link>
          <Link to="/sis">Swift Innovators' Summit</Link>
          <Link to="/students">Students</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/news">News & Achievements</Link>
          <Link to="/joinus">Join Us</Link>
        </header>
        <div className={styles.jumboText}>
          <h1>
            Swift Accelerator
            <br />
            Programme
          </h1>
          <div>
            <a target="_blank" href="https://www.instagram.com/swiftinsg/">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a target="_blank" href="https://twitter.com/swiftinsg">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a target="_blank" href="mailto:hello@swiftinsg.org">
              <FontAwesomeIcon icon={["far", "envelope"]} />
            </a>
          </div>
        </div>
        <h3
          style={{
            backgroundColor: "lightgray",
            borderRadius: 10,
            padding: "10px 10px",
            width: "fit-content",
            marginTop: 30
          }}
        >
          <span style={{marginRight: 5}}>Want to get updates on Swift Accelerator?</span>
          <span
            style={{
              padding: "5px 15px",
              backgroundColor: "orange",
              textDecoration: "none",
              borderRadius: 10,
              display: "inline-block",
            }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="http://tk.sg/swiftmailinglist"
              target="_blank"
            >
              Join the newsletter
            </a>
          </span>
        </h3>
      </section>
      {/*<section className={[styles.section, styles.sectionTwo].join(' ')}>
        <SectionTitle title="About" />
        <div className={styles.text}>
          <p>The Swift Accelerator Programme is an intensive talent development programme for secondary school students with an interest and aptitude for app development and computational thinking. Over 8 months, participants learn to code in Swift, and apply story-telling and design thinking principles to design, build, and release an iOS app of their own.</p>
          <p>First launched in 2018 by IMDA and Apple, the programme has helped develop three selected groups of young coders in 2018, 2019, and 2020, by giving them the space, opportunity, and guidance in coding, story-telling, and design thinking, in order to help them take their passion to the next level.</p>
          <p>The programme is fully subsidised for successful applicants. We look forward to welcoming the Class of 2021.</p>
        </div>
      </section>
      <section className={[styles.section, styles.sectionThree].join(' ')}>
        <div className={styles.photoGallery} />
      </section>
      <section className={[styles.section, styles.sectionFour].join(' ')}>
        <SectionTitle title="What's New" />
      </section>*/}
    </main>
  );
};

export default IndexPage;
