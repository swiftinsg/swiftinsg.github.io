import React from "react";
import Page from "../components/Page";
import BannerSection from "../components/BannerSection";
import Section from "../components/Section";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";

import * as styles from "./styles/news.module.scss";
import newsBanner from "../images/banners/news.jpeg";

function StudentsPage() {

    return (<>
        <Header startWhite={true} />
        <Page>
            <BannerSection bg={newsBanner}>
                <h1>News and<br />Achievements</h1>
                <ReadMore />
            </BannerSection>
            <Section className={styles.sectionTwo}>
                <SectionTitle title="News" />
                <div className={styles.flexContainer}>
                    <div className={styles.articleBlock}>
                            <img src={`/assets/news/news2.jpg`} className={styles.articleImgContainer} alt='sis 2021'/>
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>Our Class of 2020 graduated at the Swift Innovators' Summit 2021!</h2>
                            <a href="https://www.youtube.com/watch?v=9Uk3tsdwI4A" className={styles.seeMoreButton}>WATCH IT HERE</a>
                        </div>
                    </div>
                    <div className={styles.articleBlock}>
                            <img src={`/assets/news/news1.jpg`} className={styles.articleImgContainer} alt='tim cook visit'/>
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>Apple CEO Tim Cook visited us in 2019, and encouraged students to code</h2>
                            <a href="https://www.straitstimes.com/tech/apple-chief-in-spore-urges-kids-to-learn-coding" className={styles.seeMoreButton}>READ MORE</a>
                        </div>
                    </div>
                    <div className={styles.articleBlock}>
                            <img src={`/assets/news/news0.jpg`} className={styles.articleImgContainer} alt='first news feature'/>
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>A news feature on apps created by Swift Accelerator students</h2>
                            <a href="https://www.straitstimes.com/singapore/education/apple-picks-up-apps-created-by-sst-students" className={styles.seeMoreButton}>READ MORE</a>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={styles.sectionThree}>
                <SectionTitle title="Achievements" />
                <div className={styles.flexContainer}>
                    <div className={styles.articleBlock}>
                            <img src={`/assets/news/news2.jpg`} className={styles.articleImgContainer} alt='sis 2021'/>
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>Our Class of 2020 graduated at the Swift Innovators' Summit 2021!</h2>
                            <a href="https://www.youtube.com/watch?v=9Uk3tsdwI4A" className={styles.seeMoreButton}>WATCH IT HERE</a>
                        </div>
                    </div>
                    <div className={styles.articleBlock}>
                            <img src={`/assets/news/news1.jpg`} className={styles.articleImgContainer} alt='tim cook visit'/>
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>Apple CEO Tim Cook visited us in 2019, and encouraged students to code</h2>
                            <a href="https://www.straitstimes.com/tech/apple-chief-in-spore-urges-kids-to-learn-coding" className={styles.seeMoreButton}>READ MORE</a>
                        </div>
                    </div>
                    <div className={styles.articleBlock}>
                            <img src={`/assets/news/news0.jpg`} className={styles.articleImgContainer} alt='first news feature'/>
                        <div className={styles.articleText}>
                            <h2 className={styles.articleTitle}>A news feature on apps created by Swift Accelerator students</h2>
                            <a href="https://www.straitstimes.com/singapore/education/apple-picks-up-apps-created-by-sst-students" className={styles.seeMoreButton}>READ MORE</a>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </Page>
    </>);
}

export default StudentsPage;