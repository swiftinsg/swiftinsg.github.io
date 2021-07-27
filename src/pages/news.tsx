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
import * as newsStyles from "./styles/news.module.scss";

function StudentsPage() {

    return (<>
        <Header />
        <main className={styles.page} style={{ backgroundImage: "url(/static/assets/genericBg.svg)" }}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <h1>News</h1>
                <div className={newsStyles.flexContainer}>
                    <div className={newsStyles.articleBlock}>
                            <StaticImage src="../images/banners/appBanner.png" className={newsStyles.articleImgContainer} alt='news article'/>                      
                        <div className={newsStyles.articleText}>
                            <h2 className={newsStyles.articleTitle}>Apple CEO Tim Cook visited us in 2019, and encouraged students to code</h2>
                            <a href="#" className={newsStyles.seeMoreButton}>SEE MORE</a>
                        </div>
                    </div>
                    <div className={newsStyles.articleBlock}>
                            <StaticImage src="../images/speakers/yuma.png" className={newsStyles.articleImgContainer} alt='news article'/>                      
                        <div className={newsStyles.articleText}>
                            <h2 className={newsStyles.articleTitle}>Test Headline 2</h2>
                            <a href="#" className={newsStyles.seeMoreButton}>SEE MORE</a>
                        </div>
                    </div>
                </div>

                
            </section>
            <Footer />
        </main>
    </>);
}

export default StudentsPage;