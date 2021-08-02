import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";

import * as styles from "./styles/sis.module.scss";
import SIS2022 from "../components/sis/2022";
import SIS2021 from "../components/sis/2021";
import SIS2019 from "../components/sis/2019";
import SIS2018 from "../components/sis/2018";

function SISPage() {

    const [year, setYear] = useState<"2018" | "2019" | "2021" | "2022">("2021");

    const elemsByYear = {
        "2018": <SIS2018 />,
        "2019": <SIS2019 />,
        "2021": <SIS2021 />
    }

    return (<>
        <Header />
        <main className={styles.page} style={{ backgroundImage: "url(/assets/genericBg.svg)" }}>
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
                    <div className={styles.sisBtn} onClick={() => setYear("2018")} style={{ backgroundColor: year === "2018" ? "var(--secondary)" : "" }}>SIS 2018</div>
                    <div className={styles.sisBtn} onClick={() => setYear("2019")} style={{ backgroundColor: year === "2019" ? "var(--secondary)" : "" }}>SIS 2019</div>
                    <div className={styles.sisBtn} onClick={() => setYear("2021")} style={{ backgroundColor: year === "2021" ? "var(--secondary)" : "" }}>SIS 2021</div>
                    <div className={styles.sisBtn} style={{ backgroundColor: year === "2022" ? "var(--secondary)" : "", cursor: 'not-allowed' }}>SIS 2022<span>Coming Soon!</span></div>
                </div>
                {/*<SectionTitle title="Swift Innovators’ Summit 2022" />*/}

                {elemsByYear[year]}

                <div className={styles.appBanner}>
                    <h1>Changing the world. One app at a time.</h1>
                    <p>From apps for work to apps for play, see how our Swift Accelerator Program 2020<br />students bring their ideas to life.</p>
                    <Link to="/apps">Explore the apps</Link>
                </div>
                <br />
                <br />
            </section>
            <Footer />
        </main>
    </>);
}

export default SISPage;