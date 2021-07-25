import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";

import * as styles from "./styles/sis.module.scss";

function SISPage() {

    return (<>
        <Header />
        <main className={styles.page}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <div className={styles.logoBig} />
                <h1>Swift Innovators'<br />Summit 2022</h1>
                <h3>Coming Soon!</h3>
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <SectionTitle title="About Swift Innovators' Summit" />
                <div className={styles.text}>
                    <p>The Swift Innovators’ Summit, organised by students for students, celebrate the app development journey of the Swift Accelerator students. Attendees will get to hear from distinguished speakers, explore the apps created and get started on their coding journey at clinics offered by our esteemed trainers.</p>
                </div>
            </section>
            <section className={[styles.section, styles.sectionThree].join(" ")}>
                <div className={styles.btnHolder}>
                    <div className={styles.sisBtn}>SIS 2018</div>
                    <div className={styles.sisBtn}>SIS 2019</div>
                    <div className={styles.sisBtn}>SIS 2021</div>
                    <div className={styles.sisBtn}>SIS 2022</div>
                </div>
                {/*<SectionTitle title="Swift Innovators’ Summit 2022" />*/}

                <div className={styles.bannerHolder}>
                    <div className={styles.banner} />
                    <h1>Swift Innovators’ Summit 2022</h1>
                </div>

                <h3>Schedule</h3>
                <div className={styles.schedule}>
                    <span>Date: 30 January 2021</span>
                    <span>Time: 9.00 AM - 10:30 AM</span>
                    <span>Format: Virtual Conference</span>
                    <table>
                        <tr>
                            <td>9.00 AM - 9.15 AM</td>
                            <td>Welcome</td>
                        </tr>
                        <tr>
                            <td>9.15 AM - 9.45 AM</td>
                            <td>Fireside Chat with Yuma Soerianto, Projai Rangsri and Yee Jia Chen</td>
                        </tr>
                        <tr>
                            <td>9.45 AM - 10.05 AM</td>
                            <td>Keynote Presentation</td>
                        </tr>
                        <tr>
                            <td>10.05 AM - 10.20 AM</td>
                            <td>Graduation Ceremony of SAP</td>
                        </tr>
                        <tr>
                            <td>10.20 AM - 10.30 AM</td>
                            <td>Closing Address</td>
                        </tr>
                    </table>
                </div>

                <h3>Our Speakers</h3>
                <div className={styles.speakers}>
                    <div className={styles.speaker}>
                        <StaticImage src="../images/speakers/yuma.png" alt="yuma" className={styles.photo} />
                        <div className={styles.description}>
                            <h3>Yuma Soerianto</h3>
                            <p>Yuma is a four-time Apple WWDC scholarship winner and has made 10 apps. At the age of ten, he was the youngest scholar at WWDC17. He is featured regularly on the App Store and also teaches coding on his YouTube channel, Anyone Can Code.</p>
                        </div>
                    </div>
                    <div className={styles.speaker}>
                        <div className={styles.description} style={{ textAlign: 'right' }}>
                            <h3>Yuma Soerianto</h3>
                            <p>Yuma is a four-time Apple WWDC scholarship winner and has made 10 apps. At the age of ten, he was the youngest scholar at WWDC17. He is featured regularly on the App Store and also teaches coding on his YouTube channel, Anyone Can Code.</p>
                        </div>
                        <StaticImage src="../images/speakers/yuma.png" alt="yuma" className={styles.photo} />
                    </div>
                    <div className={styles.speaker}>
                        <StaticImage src="../images/speakers/yuma.png" alt="yuma" className={styles.photo} />
                        <div className={styles.description}>
                            <h3>Yuma Soerianto</h3>
                            <p>Yuma is a four-time Apple WWDC scholarship winner and has made 10 apps. At the age of ten, he was the youngest scholar at WWDC17. He is featured regularly on the App Store and also teaches coding on his YouTube channel, Anyone Can Code.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.appBanner}>
                    <h1>Changing the world. One app at a time.</h1>
                    <p>From apps for work to apps for play, see how our Swift Accelerator Program 2020<br />students bring their ideas to life.</p>
                    <Link to="/apps">Explore the apps</Link>
                </div>

                <StaticImage src="../images/icons.png" alt="yuma" className={styles.icons} />
            </section>
            <Footer />
        </main>
    </>);
}

export default SISPage;