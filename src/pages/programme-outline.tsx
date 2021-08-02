import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from "./styles/programme-outline.module.scss";

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
        <main className={styles.page}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <div className={styles.bg} />
                <h1>Programme Outline</h1>
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <div>
                    {steps.map((s) => <Outline {...s} />)}
                </div>
            </section>
            <Footer />
        </main>
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