import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../../../pages/styles/sis.module.scss";
import * as sisStyles from "./index.module.scss";

function sis2021() {
    return (<>
        <div className={styles.bannerHolder}>
            <div className={[styles.banner, sisStyles.bg].join(" ")} />
            <h1>Swift Innovators’ Summit 2021</h1>
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
                <StaticImage src="../images/speakers/yuma.png" alt="yuma" className={styles.photo} style={{ borderRadius: '50%' }} />
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
                <StaticImage src="../images/speakers/yuma.png" alt="yuma" className={styles.photo} style={{ borderRadius: '50%' }} />
            </div>
            <div className={styles.speaker}>
                <StaticImage src="../images/speakers/yuma.png" alt="yuma" className={styles.photo} style={{ borderRadius: '50%' }} />
                <div className={styles.description}>
                    <h3>Yuma Soerianto</h3>
                    <p>Yuma is a four-time Apple WWDC scholarship winner and has made 10 apps. At the age of ten, he was the youngest scholar at WWDC17. He is featured regularly on the App Store and also teaches coding on his YouTube channel, Anyone Can Code.</p>
                </div>
            </div>
        </div>
    </>)
}

export default sis2021;