import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "../../../pages/styles/sis.module.scss";
import * as sisStyles from "./index.module.scss";

function sis2019() {
    return (<>
        <div className={styles.bannerHolder}>
            <div className={[styles.banner, sisStyles.bg].join(" ")} />
            <h1>Swift Innovators’ Summit 2019</h1>
        </div>

        <h3>Schedule</h3>
        <div className={styles.schedule}>
            <span>Date: 11 November 2019</span>
            <span>Time: 10:30 AM - 5:30 PM</span>
            <span>Location: Singapore University of Technology and Design (SUTD)</span>
            <table>
                <tr>
                    <td>10.30 AM - 11.00 AM</td>
                    <td>Registration</td>
                </tr>
                <tr>
                    <td>11.00 AM - 12:00 PM</td>
                    <td>Gallery Walk</td>
                </tr>
                <tr>
                    <td>12:00 PM - 1.00 PM</td>
                    <td>Lunch</td>
                </tr>
                <tr>
                    <td>1.00 PM - 1.05 PM</td>
                    <td>Opening Video & Greetings</td>
                </tr>
                <tr>
                    <td>1.05 PM - 1:!5 PM</td>
                    <td>Welcome Address</td>
                </tr>
                <tr>
                    <td>1.15 PM - 1.35 PM</td>
                    <td>Opening Keynote</td>
                </tr>
                <tr>
                    <td>1.35 PM - 2.00 PM</td>
                    <td>Graduation Ceremony of the <i>Swift Accelerator Class of 2019</i></td>
                </tr>
                <tr>
                    <td>2.00 PM - 2.30 PM</td>
                    <td>Break</td>
                </tr>
                <tr>
                    <td>2.30 PM - 3.45 PM</td>
                    <td>Clinic 1</td>
                </tr>
                <tr>
                    <td>3.45 PM - 5.00 PM</td>
                    <td>Clinic 2</td>
                </tr>
                <tr>
                    <td>5.00 PM - 5.30 PM</td>
                    <td>Closing Keynote</td>
                </tr>
            </table>
        </div>

        <h3>Our Speakers</h3>
        <div className={styles.speakers}>
            <div className={styles.speaker}>
                <StaticImage src="../../../images/speakers/danielbudd.jpeg" alt="Daniel Budd" className={styles.photo} style={{ borderRadius: '50%' }} />
                <div className={styles.description}>
                    <h3>Daniel Budd</h3>
                    <p>Daniel is an Apple Distinguished Educator from Perth, Western Australia and is currently working as a Computer Science and Robotics Specialist at Hong Kong International School.</p>
                    <p>He successfully led technology integration, STEM and big data initiatives as the Director of Learning Technologies at Corpus Christi College and raises awareness of effective K-to-12 pedagogical integration of technology as a Speaker, Author and International Educator.</p>
                </div>
            </div>
            <div className={styles.speaker}>
                <div className={styles.description} style={{ textAlign: 'right' }}>
                    <h3>Dalton Ng</h3>
                    <p>Entrepreneur at heart, with a natural love for code and design. He's the founder of Master, an edutech startup developing some really cool technology and is currently a student at Singapore Poly, studying Cybersecurity.</p>
                    <p>He is also a 2 times WWDC Scholarship 2018 and 2019 recipient.</p>
                </div>
                <StaticImage src="../../../images/speakers/daltonng.jpg" alt="Dalton Ng" className={styles.photo} style={{ borderRadius: '50%' }} />
            </div>
        </div>
    </>)
}

export default sis2019;