import * as styles from "./styles/joinus.module.scss";

import BannerSection from "../components/BannerSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";
import React from "react";
import ReadMore from "../components/ReadMore";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import joinusBanner from "../images/banners/joinus.jpeg";
import Text from "../components/Text";

let steps = [
    {
        title: "Introduction to programming in Swift & Xcode",
        desc: `We begin by introducing students to programming in the latest version of the Swift programming language. Swift is a modern, open-source language created by Apple, designed to be easy for beginners to learn, and powerful for advanced users to utilise in creating iOS apps.
               Students will be introduced to coding concepts in Swift, using Xcode Playgrounds: constants, variables, data types, operators, and control flow.`,
        pic: "/assets/xcode.png"
    },
    {
        title: "From Idea to launch",
        desc: `This module introduces students to design thinking philosophies, and how to apply them to create, validate, and pitch ideas, how to find product-market fit, and do basic wireframing. We will include case studies on technology products well known ones, as well as our own, which are more obscure but rich in lessons learned.
               On the design front, students will be introduced to user interface and user experience (UI/UX) design tools such as Figma to prototype their own apps.​
               The second half of this module introduces further development in Xcode, such as functions, classes, collections, and further UIKit controls such as Stack Views.`
    },
    {
        title: "Further iOS app development in Xcode",
        desc: `This module begins exploring the development on iOS apps using Xcode. Building upon the foundation laid in Modules 1 and 2, students will be guided into creating a variety of apps with real-world applications, making full use of the iOS UIKit framework.
        iOS concepts include critical UI elements such as table views, collection views, navigation controllers, and tab bar controllers. Advanced Swift language constructs such as Optionals, Guard, and enumerations will be introduced here.`
    },
    {
        title: "Designing for delight",
        desc: `Apple has always emphasised the need to delight users in creating apps, and regularly features apps that shine through in terms of design, experience, and animation. This module will provide some background for students on how to achieve the high standards of design expected of iOS apps.
               This module brings an introduction to icon design and graphics tools, using, preferably, freely available tools such as Figma.
               In Xcode, students will learn how to implement animations in Xcode, using basic UIView animations and transitions.`
    },
    {
        title: "Persistence and libraries",
        desc: `This module covers more technically advanced features often found in iOS apps, particularly permanent data storage (on device or in the cloud), and working with external web services to store and retrieve data.
               Students will also begin to make full use of iOS device capabilities by learning and utilising powerful built-in iOS application programming interfaces (APIs). These include web and API access, geolocation, accelerometer readings, and more. Students will also be exposed to commonly-used external libraries that allow them to quickly implement powerful features while saving on development time.`
    },
    {
        title: "Building, marketing, and launching your app",
        desc: `Creating an app is never just about the technical requirements; companies and developers have to make an effort to get noticed in a store containing millions of other apps.
               In this final module, students will revise their design thinking principles to ensure they don’t “make something nobody wants”, revenue models available to apps, how to project-manage apps, and pitch them to “investors” and customers.
               Finally, students will be closely guided through the process of proposing, designing, implementing, and finally submitting their apps to the Apple App Store for public consumption. Students will also learn how best to present and tell a story about their apps.`
    }
]

function StudentsPage() {

    return (<>
        <Header startWhite={true} />
        <Page className={styles.page}>
            <BannerSection bg={joinusBanner}>
                <h1>Join Us</h1>
                <h3 id={styles.bodyText}>Applications for the Class of 2021 are closed.</h3>
                <h3 id={styles.bodyText}>Email <a className={styles.linkText} href="mailto:hello@swiftinsg.org">hello@swiftinsg.org</a> to find out more, or follow us on social media to keep up with the Class of 2021.</h3>
                <div className={styles.flexContainer}>
                <a href="https://www.instagram.com/swiftinsg" className={styles.flavorButton}>
                    <FontAwesomeIcon icon={["fab", "instagram"]} />Follow us on Instagram</a>
                <a href="https://www.youtube.com/channel/UCGYAY8RMWAkx_aDkPV_tFsA" className={styles.flavorButton} id={styles.altButton}>
                    <FontAwesomeIcon icon={["fab", "youtube"]} />Explore our Youtube Channel</a>
                </div>
                <ReadMore />
            </BannerSection>
            <Section className={styles.sectionTwo}>
                <SectionTitle title="Application Details" />
                <Text>
                    <p>To apply for the Swift Accelerator Programme, applicants must demonstrate strong aptitude and interest in programming and app design. The application process is as follows:  </p>
                    <ol>
                        <li>Take note of the important dates below for deadlines and briefings. </li>
                        <li>Confirm that you can attend the <b>vast majority</b> of the scheduled sessions. <a href="https://cld.tk.sg/6quE6O6P">See the schedule below.</a></li>
                        <li>Try out Unit 1 of our <a href="https://tk.sg/swiftui-videos-unit1">SwiftUI video series</a>. You may use Swift Playgrounds on iPad or Mac for this. If you have any issues, email us at <a href="mailto:hello@swiftinsg.org">hello@swiftinsg.org</a>.</li>
                        <li>Prepare a <b>minute-long</b> video introducing yourself and your end-product based on [3]. Reflect on your experience creating it (how you got it to work, any challenges, anything new you've tried, etc.). Our focus will be on the content of the video and not the video production quality. However, please ensure the video and audio are clear enough that we are able to understand what you say.</li>
                        <li>Prepare any supporting documents, links or any information you think might be relevant when we consider your application</li>
                        <li>Complete an individual entrance test and survey. The test includes coding, design, essay questions (involving the aforementioned video), and should be completed in about an hour.</li>
                    </ol>
                    <p><b>Important note:</b> The programme is fully subsidised for successful applicants. Please read through the application form carefully, and ensure, before applying:</p>
                    <ol>
                        <li>You can attend a vast majority of the scheduled sessions. <a href="https://cld.tk.sg/6quE6O6P">See the schedule below.</a></li>
                        <li>You're interested enough in coding, design, and app development to spend a huge chunk of your free time learning and practising — the entire programme lasts 180 hours, and you'll spend more time than that coding on your own.</li>
                        <li>You're up for a challenge!</li>
                    </ol>
                </Text>
            </Section>
            <Section className={styles.sectionTwo}>
                <SectionTitle title="Dates to Note" />
                <Text>
                    <ul>
                        <li><b>1 March, Tuesday:</b> Applications open.</li>
                        <li><b>12 March, Saturday, 10am:</b> ​Online briefing introducing the programme, with time for questions. Please register at <a href="https://tk.sg/swift2022briefing">tk.sg/swift2022briefing</a>.</li>
                        <li><b>18 March, Friday, 11pm:</b> Applications close.</li>
                        <li><b>28 March, Monday:</b> Successful applicants will be notified through email</li>
                        <li><b>9 April, Saturday, 9am:</b> First lesson</li>
                    </ul>
                </Text>
            </Section>
            <Section className={styles.sectionTwo}>
                <SectionTitle title="Schedule for 2022" />
                <Text>
                    <p>Please note, this schedule is very tentative, and based on having most classes conducted online — we will aim to bring together the class for face-to-face lessons at Apple, but only if allowed by prevailing safe distancing measures.</p>
                </Text>
                <div style={{textAlign: "center"}}>
                    <img className={styles.schedule} src="/assets/schedule2022.png"></img>
                    <p><b>You may download a copy <a href="https://cld.tk.sg/6quE6O6">here</a></b></p>
                </div>
            </Section>
            <Section className={styles.timeline}>
                <SectionTitle title="Programme Outline" />
                <div>
                    {steps.map((s) => <Outline {...s} />)}
                </div>
            </Section>
            <Footer />
        </Page>
    </>);
}

function Outline({ title, desc, pic }: { title: string; desc: string; pic?: string }) {
    return (<div className={styles.outlineDiv}>
        <div>
            <h1>{title}</h1>
            <p>{desc.split("\n").map((d) => <>{d}<br /><br /></>)}</p>
        </div>
        {pic ? <img src={pic} /> : ""}
    </div>)
}

export default StudentsPage;