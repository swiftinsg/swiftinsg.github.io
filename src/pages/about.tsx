import * as styles from "./styles/about.module.scss";

import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "gatsby";
import Page from "../components/Page";
import React, { useEffect } from "react";
import ReadMore from "../components/ReadMore";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";

function AboutPage() {

    useEffect(() => {
        document.title = "About the Swift Accelerator Programme";
    });
    
    return (<>
        <Header />
        <Page genericBackground={true}>
            <BannerSection>
                <figure />
                <h1>About Swift<br />Accelerator Programme</h1>
                <ReadMore />
            </BannerSection>
            <Section className={styles.sectionTwo}>
                <SectionTitle title="About Swift Accelerator Programme" />
                <Text>
                    <p>The Swift Accelerator Programme is an intensive talent development programme for secondary school students with an interest and aptitude for app development and computational thinking. Over 8 months, participants learn to code in Swift, and apply story-telling and design thinking principles to design, build, and release an iOS app of their own.</p>
                    <p>First launched in 2018 by IMDA and Apple, the programme has helped develop three selected groups of young coders in 2018, 2019, and 2020, by giving them the space, opportunity, and guidance in coding, story-telling, and design thinking, in order to help them take their passion to the next level.</p>
                    <p>The programme is fully subsidised for successful applicants.</p>
                </Text>
                <SectionTitle title="About Tinkercademy" />
                <div className={styles.logoHolder}>
                    <Link target="_blank" to="https://tinkertanker.com/"><img src="/assets/logos/tinkertanker.png" /></Link>
                    <Link target="_blank" to="https://tinkercademy.com/"><img src="/assets/logos/tinkercademy.png" /></Link>
                    <Link to="#"><img src="/assets/logos/acn.svg" /></Link>
                </div>
                <Text>
                    <p>Tinkercademy is the education programmes brand of Tinkertanker Pte Ltd, a member of the Apple Consultants Network, where we teach coding and making to learners of all ages. The Swift Accelerator Programme is one of our flagship coding courses, an intensive year-long course for talented young app developers, developed and run with support from IMDA and Apple. We also run Swift Coding Clubs for students to learn to code and build apps with iPad and Xcode, as well as hands-on Swift Playgrounds workshops with micro:bit, Sphero, Dash, and more. Our vision is that everyone should be empowered to enjoy creating with technology. To that end, our mission is to inspire delight and wonder with technology, to have students learn from the best educators and crafters in the field.</p>
                </Text>
                <SectionTitle title="Programme Outline" />
                <Text>
                    <p>Get more details to the programme outline <Link to="/joinus">here</Link>.</p>
                </Text>
            </Section>
            
            <Footer />
        </Page>
    </>);
}

export default AboutPage;