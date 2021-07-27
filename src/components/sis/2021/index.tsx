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
                <StaticImage src="../../../images/speakers/yuma.jpeg" alt="Yuma" className={styles.photo} style={{ borderRadius: '50%' }} />
                <div className={styles.description}>
                    <h3>Yuma Soerianto</h3>
                    <p>Yuma is a four-time Apple WWDC scholarship winner and has made 10 apps. At the age of ten, he was the youngest scholar at WWDC17. He is featured regularly on the App Store and also teaches coding on his YouTube channel, Anyone Can Code.</p>
                </div>
            </div>
            <div className={styles.speaker}>
                <div className={styles.description} style={{ textAlign: 'right' }}>
                    <h3>Porjai Rangsri</h3>
                    <p>Porjai Rangsri had started dabbling in the world of programming at third grade and has since created 4 apps. Her latest app ‘HappHear’ was created to help the disabled communicate with others faster in an emergency situation. It won her the Swift Student Challenge at WWDC20</p>
                </div>
                <StaticImage src="../../../images/speakers/porjai.jpeg" alt="Porjai" className={styles.photo} style={{ borderRadius: '50%' }} />
            </div>
            <div className={styles.speaker}>
                <StaticImage src="../../../images/speakers/jiachen.png" alt="Jia Chen" className={styles.photo} style={{ borderRadius: '50%' }} />
                <div className={styles.description}>
                    <h3>Yee Jia Chen</h3>
                    <p>Graduating from the Swift Accelerator Programme in 2018, Jia Chen has continued pursuing coding and helping students in the programme. He has published 3 apps on the App Store and won the 2020 Swift Student Challenge at WWDC20</p>
                </div>
            </div>
        </div>
    </>)
}

export default sis2021;