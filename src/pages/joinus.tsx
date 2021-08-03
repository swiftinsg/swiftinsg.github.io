import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from "./styles/joinus.module.scss";

function StudentsPage() {

    return (<>
        <Header startWhite={true} />
        <main className={styles.page}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <div className={styles.bg} />
                <h1>Join Us</h1>
                <h3 id={styles.bodyText}>Applications for the Class of 2021 are closed.</h3>
                <h3 id={styles.bodyText}>Email <a className={styles.linkText} href="mailto:hello@swiftinsg.org">hello@swiftinsg.org</a> to find out more, or follow us on social media to keep up with the Class of 2021.</h3>
                <div className={styles.flexContainer}>
                <a href="https://www.instagram.com/swiftinsg" className={styles.flavorButton}>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />Follow us on Instagram</a>
                <a href="https://www.youtube.com/channel/UCGYAY8RMWAkx_aDkPV_tFsA" className={styles.flavorButton} id={styles.altButton}>
                    <FontAwesomeIcon icon={["fab", "youtube"]} />Explore our Youtube Channel</a>
                </div>
            </section>
        </main>
    </>);
}

export default StudentsPage;