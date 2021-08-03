import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./styles/news.module.scss";

function StudentsPage() {

    return (<>
        <Header startWhite={true} />
        <main className={styles.page}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <div className={styles.bg} />
                <h1>News</h1>
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <div className={styles.flexContainer}>
                    <div className={styles.articleBlock}>
                            <StaticImage src="../images/banners/appBanner.png" className={styles.articleImgContainer} alt='news article'/>                      
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>Apple CEO Tim Cook visited us in 2019, and encouraged students to code</h2>
                            <a href="#" className={styles.seeMoreButton}>SEE MORE</a>
                        </div>
                    </div>
                    <div className={styles.articleBlock}>
                            <StaticImage src="../images/speakers/yuma.png" className={styles.articleImgContainer} alt='news article'/>                      
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>Test Headline 2</h2>
                            <a href="#" className={styles.seeMoreButton}>SEE MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    </>);
}

export default StudentsPage;