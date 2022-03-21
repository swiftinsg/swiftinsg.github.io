import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../../../pages/styles/sis.module.scss";
import * as sisStyles from "./index.module.scss";

function sis2018() {
    return (<>
        <div className={styles.bannerHolder}>
            <div className={[styles.banner, sisStyles.bg].join(" ")} />
            <h1>Swift Innovators’ Summit 2018</h1>
        </div>

        <h3>Schedule</h3>
        <div className={styles.schedule}>
            <span>Date: 10 November 2018</span>
            <span>Time: 9.00 AM - 3.00 PM</span>
            <span>Location: School of Science and Technology, Singapore</span>
            <table>
                <tr>
                    <td>9.00 AM - 10.25 AM</td>
                    <td>Registration + Gallery Walk</td>
                </tr>
                <tr>
                    <td>10.25 AM - 10.45 AM</td>
                    <td>Welcome Address</td>
                </tr>
                <tr>
                    <td>10.45 AM - 11.05 AM</td>
                    <td>Opening Keynote</td>
                </tr>
                <tr>
                    <td>11.05 AM - 11.20 AM</td>
                    <td>Graduation Ceremony of <i>Swift Accelerator Class of 2018</i></td>
                </tr>
                <tr>
                    <td>11.20 AM - 1.30 PM</td>
                    <td>Clinics</td>
                </tr>
                <tr>
                    <td>1.30 PM - 2.00</td>
                    <td>Lunch & Challenge</td>
                </tr>
                <tr>
                    <td>2.00 PM - 3.00 PM</td>
                    <td>Closing Keynote</td>
                </tr>
            </table>
        </div>

        <h3>Our Speakers</h3>
        <div className={styles.speakers}>
            <div className={styles.speaker}>
                <StaticImage src="../../../images/speakers/yuma.jpeg" alt="Yuma" className={styles.photo} style={{ borderRadius: '50%' }} />
                <div className={styles.description}>
                    <h3>Yuma Soerianto</h3>
                    <p>Born in Singapore, Yuma started coding when he was six. Today, at eleven, he has published nine apps on the App Store. He was also the youngest scholarship recipient at Apple's Worldwide Developer Conference 2017.</p>
                    <p>Yuma has been teaching coding and app development on YouTube (channel: <a href="https://www.youtube.com/channel/UCuCWFtFqtR-OzqL1lLcdLXw">Anyone Can Code</a>), teaching others how to make apps XCode and Swift. He wishes to make the world a better place with technology and his apps.</p>
                </div>
            </div>
        </div>
    </>)
}

export default sis2018;