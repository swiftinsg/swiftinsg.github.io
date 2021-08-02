import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";

import * as styles from "./styles/tinkertanker.module.scss";
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
                <h1>Tinkertanker</h1>
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <SectionTitle title="About Tinkertanker" />
                <div className={styles.text}>
                    <p>The Swift Innovators’ Summit, organised by students for students, celebrate the app development journey of the Swift Accelerator students. Attendees will get to hear from distinguished speakers, explore the apps created and get started on their coding journey at clinics offered by our esteemed trainers.</p>
                </div>
            </section>
            <section className={[styles.section, styles.sectionThree].join(" ")}>
                
            </section>
            <Footer />
        </main>
    </>);
}

export default SISPage;