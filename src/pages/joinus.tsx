import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./styles/apps.module.scss";
import * as joinStyles from "./styles/joinus.module.scss";
function StudentsPage() {

    return (<>
        <Header />
        <main className={styles.page} style={{ backgroundImage: "url(/static/assets/genericBg.svg)" }}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <h1>Join Us</h1>
                <h3 id={joinStyles.bodyText}>Applications for the Class of 2021 are closed.</h3>
                <h3 id={joinStyles.bodyText}>Email <a className={joinStyles.linkText} href="mailto:hello@swiftinsg.org">hello@swiftinsg.org</a> to find out more, or follow us on social media to keep up with the Class of 2021.</h3>
                <div className={joinStyles.flexContainer}>
                <a href = "https://www.instagram.com/swiftinsg" className={joinStyles.flavorButton}>Follow us on Instagram</a>
                <a href = "https://www.youtube.com/channel/UCGYAY8RMWAkx_aDkPV_tFsA" className={joinStyles.flavorButton} id={joinStyles.altButton}>Explore our Youtube Channel</a>
                </div>
            </section>
            <Footer />
        </main>
    </>);
}

export default StudentsPage;