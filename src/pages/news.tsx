import * as styles from "./styles/news.module.scss";

import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";
import React, { useEffect } from "react";
import ReadMore from "../components/ReadMore";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text"
import newsBanner from "../images/banners/news.jpeg";

const wwdc22Winners = [
    {
        name: "Carl Ian Voller",
        img: "/assets/news/wwdc/carl.png",
        desc1: "WWDC 2022 Swift Student Challenge winner",
        desc2: "SAP Class of 2018",
        embedLink: "https://www.youtube.com/embed/m_6MWpc9nD4"
    },
    {
        name: "Karandeep Singh",
        img: "/assets/news/wwdc/karandeep.png",
        desc1: "WWDC 2022 Swift Student Challenge winner",
        desc2: "SAP Class of 2019",
        embedLink: "https://www.youtube.com/embed/_EpPb6ArXyo"
    },
    {
        name: "James Ryan Chen",
        img: "/assets/news/wwdc/james.png",
        desc1: "WWDC 2022 Swift Student Challenge winner",
        desc2: "SAP Class of 2021",
        embedLink: "https://www.youtube.com/embed/sCmf9MyERi0"
    },
    {
        name: "Loh Shao Qi",
        img: "/assets/news/wwdc/shaoqi.png",
        desc1: "WWDC 2022 Swift Student Challenge winner",
        desc2: "SAP Class of 2022",
        embedLink: "https://www.youtube.com/embed/XvgWVSjea_A"
    }
]
const pastWwdcWinners = [
    {
        name: "Yee Jia Chen",
        img: "/assets/news/wwdc/jiachen.png",
        desc1: "WWDC 2020 and 2021 Swift Student Challenge winner",
        desc2: "SAP Class of 2018",
        embedLink: "https://www.youtube.com/embed/iHAuAlpHKZE"
    },
    {
        name: "Chua Wei Xuan",
        img: "/assets/news/wwdc/weixuan.jpeg",
        desc1: "WWDC 2021 Swift Student Challenge winner",
        desc2: "SAP Class of 2021",
        embedLink: "https://www.youtube.com/embed/W7KstoEl_bs"
    }
]

function StudentsPage() {

    useEffect(() => {
        document.title = "News & Achievements";
    });

    return (<>
        <Header startWhite={true} />
        <Page>
            <BannerSection bg={newsBanner}>
                <h1>News &<br />Achievements</h1>
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
                <h1>WWDC Swift Student Challenge</h1>
                <Text>Supporting students from around the world who love to code, Apple's WWDC Swift Student Challenge provides an opportunity for students to showcase their passion for coding by creating an incredible Swift playground on the topic of their choice. Meet the Swift Student Challenge winners from the Swift Accelerator Program and see their story.</Text>
                <br />
                <SectionTitle title="WWDC 2022 SSC Winners" size="3vh" weight="bold" />
                <>
                {wwdc22Winners.map((winner) =>
                    <div className={styles.wwdcWinner}>
                        <img src={winner.img} />
                        <div>
                            <span>{winner.name}</span>
                            <span>{winner.desc1}</span>
                            <span>{winner.desc2}</span>
                        </div>
                        <iframe width="560" height="315" src={winner.embedLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )}
                </>
                <SectionTitle title="WWDC 2021 SSC Winners" size="3vh" weight="bold" />
                <>
                {pastWwdcWinners.map((winner) =>
                    <div className={styles.wwdcWinner}>
                        <img src={winner.img} />
                        <div>
                            <span>{winner.name}</span>
                            <span>{winner.desc1}</span>
                            <span>{winner.desc2}</span>
                        </div>
                        <iframe width="560" height="315" src={winner.embedLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )}
                </>
            </Section>
            <Footer />
        </Page>
    </>);
}

export default StudentsPage;