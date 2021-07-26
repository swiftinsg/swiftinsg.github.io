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

function StudentsPage() {

    return (<>
        <Header />
        <main className={styles.page} style={{ backgroundImage: "url(/static/assets/genericBg.svg)" }}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <h1>Our Apps</h1>
                {/*<div className={styles.stats}>   
                    <div>
                        <h1>33</h1>
                        <h3>Apps Published</h3>
                    </div>
                </div>*/}
                <ReadMore />
            </section>
            <Footer />
        </main>
    </>);
}

export default StudentsPage;