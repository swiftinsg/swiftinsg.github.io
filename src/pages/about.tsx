import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";

import * as styles from "./styles/about.module.scss";
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
                <h1>About the Swift<br />Accelerator Programme</h1>
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <SectionTitle title="About Swift Accelerator Programme" />
                <div className={styles.text}>
                    <p>The Swift Accelerator Programme is an intensive talent development programme for secondary school students with an interest and aptitude for app development and computational thinking. Over 8 months, participants learn to code in Swift, and apply story-telling and design thinking principles to design, build, and release an iOS app of their own.</p>
                    <p>First launched in 2018 by IMDA and Apple, the programme has helped develop three selected groups of young coders in 2018, 2019, and 2020, by giving them the space, opportunity, and guidance in coding, story-telling, and design thinking, in order to help them take their passion to the next level.</p>
                    <p>The programme is fully subsidised for successful applicants.</p>
                </div>
                <SectionTitle title="About Tinkercademy" />
                <div className={styles.logoHolder}>
                    <Link target="_blank" to="https://tinkertanker.com/"><img src="/assets/logos/tinkertanker.png" /></Link>
                    <Link target="_blank" to="https://tinkercademy.com/"><img src="/assets/logos/tinkercademy.png" /></Link>
                    <Link to="#"><img src="/assets/logos/acn.svg" /></Link>
                </div>
                <div className={styles.text}>
                    <p>Tinkercademy is the education programmes brand of Tinkertanker Pte Ltd, a member of the Apple Consultants Network, where we teach coding and making to learners of all ages. The Swift Accelerator Programme is one of our flagship coding courses, an intensive year-long course for talented young app developers, developed and run with support from IMDA and Apple. We also run Swift Coding Clubs for students to learn to code and build apps with iPad and Xcode, as well as hands-on Swift Playgrounds workshops with micro:bit, Sphero, Dash, and more. Our vision is that everyone should be empowered to enjoy creating with technology. To that end, our mission is to inspire delight and wonder with technology, to have students learn from the best educators and crafters in the field.</p>
                </div>
                <SectionTitle title="Programme Outline" />
                <div className={styles.text}>
                    <p>Get more details to the program outline <Link to="/joinus">here</Link>.</p>
                </div>
            </section>
            
            <Footer />
        </main>
    </>);
}

export default SISPage;