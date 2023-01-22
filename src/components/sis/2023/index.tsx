import * as styles from "./index.module.scss";

import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Section from "../../Section";
import SectionTitle from "../../SectionTitle";
import Text from "../../Text";
import { StaticImage } from "gatsby-plugin-image";
import Map from "./map";
import ARdiceIcon from "../../../images/workshopIcons/ardice.svg";
import droneIcon from "../../../images/workshopIcons/drone.svg";
import inclusiveAppIcon from "../../../images/workshopIcons/inclusiveApp.svg";
import ltcIcon from "../../../images/workshopIcons/ltc.svg";
import triviaGameIcon from "../../../images/workshopIcons/triviagame.svg";
import CowMLIcon from "../../../images/workshopIcons/CowMLicon.svg";

const apps: {
    title: String;
    description: String;
    icon: String;
    link: String;
    video: String;
}[] = [
    {
        title: "Grass",
        description: "Personalise your plants",
        icon: "2022/Grass.jpg",
        link: "https://app.swiftinsg.org/grass",
        video: "https://youtube.com",
    },
    {
        title: "GiftDuck",
        description: "Never forget a birthday again!",
        icon: "2022/GiftDuck.jpg",
        link: "https://app.swiftinsg.org/giftduck",
        video: "https://youtube.com",
    },
    {
        title: "Money Rush",
        description: "ALoan? Fret not!",
        icon: "2022/MoneyRush.jpg",
        link: "https://app.swiftinsg.org/moneyrush",
        video: "https://youtube.com",
    },
    {
        title: "Sturrel",
        description: "Engaging, Educational Learning",
        icon: "2022/Sturrel.jpg",
        link: "https://app.swiftinsg.org/sturrel",
        video: "https://youtube.com",
    },
    {
        title: "LeMoney",
        description: "Wishlist, Budgeting, & Finance",
        icon: "2022/LeMoney.jpg",
        link: "https://app.swiftinsg.org/lemoney",
        video: "https://youtube.com",
    },
    {
        title: "Future",
        description: "Never forget important dates",
        icon: "2022/Future.jpg",
        link: "https://app.swiftinsg.org/future",
        video: "https://youtube.com",
    },
    {
        title: "SnapBoard",
        description: "Scan & Organise Whiteboards",
        icon: "2022/SnapBoard.jpg",
        link: "https://app.swiftinsg.org/snapboard",
        video: "https://youtube.com",
    },
    {
        title: "Stockoholic",
        description: "Fictional Stocks, Real Fun",
        icon: "2022/Stockoholic.jpg",
        link: "https://app.swiftinsg.org/stockoholic",
        video: "https://youtube.com",
    },
    {
        title: "Horizon",
        description: "Made for Singapore Youths",
        icon: "2022/Horizon.jpg",
        link: "https://app.swiftinsg.org/horizon",
        video: "https://youtube.com",
    },
    {
        title: "PlaneMail",
        description: "Email Planner on the Go",
        icon: "2022/PlaneMail.jpg",
        link: "https://app.swiftinsg.org/planemail",
        video: "https://youtube.com",
    },
    {
        title: "ElderlyFit",
        description: "Mild exercises for elderly",
        icon: "2022/ElderlyFit.jpg",
        link: "https://app.swiftinsg.org/elderlyfit",
        video: "https://youtube.com",
    },
    {
        title: "VStudy",
        description: "Your Perfect Study Buddy",
        icon: "2022/VStudy.jpg",
        link: "https://app.swiftinsg.org/vstudy",
        video: "https://youtube.com",
    },
    {
        title: "NAPFA+",
        description: "Ace your NAPFA",
        icon: "2022/NAPFA+.jpg",
        link: "https://app.swiftinsg.org/napfa",
        video: "https://youtube.com",
    },
    {
        title: "HalalSG",
        description: "Find Halal Restaurants Easily",
        icon: "2022/HalalSG.jpg",
        link: "https://app.swiftinsg.org/halalsg",
        video: "https://youtube.com",
    },
];

const workshops: {
    title: String;
    desc: String;
    level: String;
    instructor: String;
    imgLink: String;
}[] = [
    {
        title: "Inclusive App Design",
        desc: "Apart from coding, design plays an integral part in making the app or product more accessible to the public. Learn about design thinking, and how to make clean and accessible user interfaces that enhance your product.",
        level: "Beginner",
        instructor: "By Swift Accelerator Alumni",
        imgLink: inclusiveAppIcon,
    },
    {
        title: "Learn to Code",
        desc: "Want to open a gateway to a new world of problem-solving? Join us at our workshop and use basic Swift syntax to solve problems with the cute mascot Byte!",
        level: "Beginner",
        instructor: "By Swift Accelerator Alumni",
        imgLink: ltcIcon,
    },
    {
        title: "Drone Flying with Swift Playgrounds",
        desc: "Have you ever wanted to play with drones but don't have one at home? Fret not - in this workshop, we'll be covering basic concepts behind flying drones and using code to bring them to life.",
        level: "Beginner",
        instructor: "By Swift Accelerator Alumni",
        imgLink: droneIcon,
    },
    {
        title: "Building a Trivia game",
        desc: "Have you ever wondered how the apps on your devices are made? In this workshop, you'll learn how to use Swift Playgrounds & SwiftUI to build your very first app: a fun and engaging game of trivia!",
        level: "Advanced",
        instructor: "By Swift Accelerator Alumni",
        imgLink: triviaGameIcon,
    },
    {
        title: "CowML",
        desc: "Create an image recognition app with CoreML. In this workshop, we'll re-create a version of the fictional hit app, Hot Dog Or Not, from a popular comedy series using Swift, CoreML, and cows. You’ll need to bring photos or drawings of cows for this workshop!",
        level: "Advanced",
        instructor: "By Swift Accelerator Instructor",
        imgLink: CowMLIcon,
    },
    {
        title: "Building an AR Dice app",
        desc: "Use Swift, Xcode, and Reality Composer to create your very own augmented reality experience that interacts with physics! Throw your virtual dice up, make it spin, and fall back down to the ground.",
        level: "Advanced",
        instructor: "By Swift Accelerator Alumni",
        imgLink: ARdiceIcon,
    },
];

let width = 0;

function SIS2023() {

    useEffect(() => {
        document.title = "Swift Innovators' Summit 2023";
    });
    
    return (
        <>
            <Section className={styles.sectionOne}>
                <div className={styles.signUp}>
                    <p>Sign up for SIS 2023</p>
                    <a href="https://tk.sg/sis2023">
                        <b>Register now</b>
                    </a>
                </div>
                <div className={styles.apps}>
                    <p>Our Students' Apps</p>
                    <div>
                        {apps.map((app) => (
                            <AppCard info={app} />
                        ))}
                    </div>
                </div>
            </Section>
            <Section className={styles.sectionThree}>
                <SectionTitle title="Agenda" />
                <div className={styles.schedule}>
                    <span>Date: 11 Feb 2023 </span>
                    <span>Time: 9:45 AM - 3.30 PM </span>
                    <span>Location: St. Joseph's Institution </span>
                </div>

                <h3>Schedule</h3>
                <div className={styles.schedule}>
                    <table>
                        <tr>
                            <td>9:45 - 10:15</td>
                            <td>Workshop Registration</td>
                        </tr>
                        <tr>
                            <td>10:15 - 11:15</td>
                            <td>Workshop Session 1</td>
                        </tr>
                        <tr>
                            <td>11:15 - 11:25</td>
                            <td>Break & Refreshments</td>
                        </tr>
                        <tr>
                            <td>11:25 - 12:25 </td>
                            <td>Workshop Session 2</td>
                        </tr>
                        <tr>
                            <td rowSpan={2}>12:30 - 13:30</td>
                            <td>Celebrations Registration</td>
                        </tr>
                        <tr>
                            <td>Gallery Walk</td>
                        </tr>
                        <tr>
                            <td rowSpan={6}>13:30 - 15:30</td>
                        </tr>
                        <tr>
                            <td>Opening Speech</td>
                        </tr>
                        <tr>
                            <td>Keynote 1</td>
                        </tr>
                        <tr>
                            <td>Keynote 2</td>
                        </tr>
                        <tr>
                            <td>Graduation Ceremony</td>
                        </tr>
                        <tr>
                            <td>End</td>
                        </tr>

                        {/* <tr>
                        <td>11:15 - 11:40</td>
                    </tr>
                    <tr>
                        <td>11:40 - 12:05</td>
                    </tr>
                    <tr>
                        <td>12:05 - 12:30</td>
                    </tr>
                    <tr>
                        <td>15:45 </td>
                    </tr> */}
                    </table>
                </div>
                <h3>Venue</h3>
                <div className={styles.gettingThere}>
                    <div>
                        <p>
                            St. Joseph's Institution
                            <br />
                            38 Malcolm Rd, Singapore 308274
                            <br />
                            Nearest MRT station: Stevens
                            <br />
                            <br />
                            <a
                                style={{
                                    background: "#F6B800",
                                    padding: "10px 20px",
                                    borderRadius: 15,
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                                href="https://www.sji.edu.sg/contact#_ptoh_78094"
                                target="_blank"
                            >
                                Getting there
                            </a>
                        </p>
                        <div>
                            <Map />
                        </div>
                    </div>
                </div>
                <h3>Speakers</h3>
                <div className={styles.speakers}>
                    <div className={styles.speaker}>
                        <img
                            src={"/assets/speakers/edwin.jpeg"}
                            alt="Edwin Khoo"
                            className={styles.photo}
                        />
                        <div className={styles.description}>
                            <h3>Edwin Khoo</h3>
                            <p>
                                Edwin actively reviews the latest technology to assess their
                                suitability for himself and others. As a blind individual who
                                used to helm the Accessibility departments at Singapore
                                Association of the Visually Handicapped, he is enthusiastic
                                about how technology can enhance everyone’s daily life and lead
                                to better productivity at work
                            </p>
                        </div>
                    </div>
                    <div className={styles.speaker}>
                        <img
                            src={"/assets/speakers/jakob.jpeg"}
                            alt="Jakob"
                            className={styles.photo}
                        />
                        <div className={styles.description}>
                            <h3>Jakob Lykkegaard Pedersen</h3>
                            <p>
                                Jakob has been an active player in the SEA tech and game
                                industry since 2009. He is a serial entrepreneur, who is behind
                                the 2 successful exits of Playlab and Pagemodo. Playlab was the
                                biggest independent mobile game developer in South East Asia,
                                managing 28 million players worldwide, and was acquired in 2017.
                                Pagemodo, which was acquired by Webs & Vistaprint in 2011, was
                                the first template tool for Facebook Pages. Jakob is now mainly
                                spending his time building Apple Arcade games in partnership
                                with Apple at Lykke Studios and had one of their titles ‘tint.’
                                nominated for an Apple Design award.
                            </p>
                        </div>
                    </div>
                </div>
                <h3>Workshops</h3>
            </Section>
            <Section>
                <div>
                    {workshops.map((workshop) => (
                        <WorkshopCard info={workshop} />
                    ))}
                </div>
                <div className={styles.sectionThree}>
                    <div className={styles.appBanner}>
                        <h1>Changing the world. One app at a time.</h1>
                        <p>
                            From apps for work to apps for play, see how our Swift Accelerator
                            Program 2022
                            <br />
                            students bring their ideas to life.
                        </p>
                        <Link to="/apps">Explore the apps</Link>
                    </div>
                    <br />
                </div>
            </Section>
        </>
    );
}

function AppCard({ info }) {
    return (
        <div className={styles.appCard}>
            <div
                className={styles.img}
                style={{ backgroundImage: `url(/assets/appIcons/${info.icon})` }}
            />
            <div className={styles.div}>
                <p>
                    <b>{info.title}</b>
                </p>
                <a target="_blank" href={info.link}>
                    Get App
                </a>
            </div>
        </div>
    );
}

function WorkshopCard({ info }) {
    // const [bigScreen, setBigScreen] = useState(false);
    // useEffect(() => {
    // 	setBigScreen(window.innerWidth > 760);
    // }, []);
    return (
        <div className={styles.workshopCard}>
            <img src={info.imgLink} />
            <div>
                <p>
                    <p
                        className={styles.levelLabel}
                        style={{
                            backgroundColor: info.level == "Beginner" ? "#9FE399" : "#FF76F1",
                        }}
                    >
                        {info.level}
                    </p>
                    <p className={styles.title}>{info.title}</p>
                </p>
                {/* {bigScreen ? <div /> : <p>{info.desc}</p>} */}
                <p>{info.desc}</p>
                <b>{info.instructor}</b>
            </div>
            {/* {bigScreen ? <p>{info.desc}</p> : <div />} */}
        </div>
    );
}

export default SIS2023;

// function SpeakerCard({ speaker }) {
// 	return (
// 		<div className={styles.speakers}>
// 			<div className={styles.speaker}>
// 				<StaticImage src="../../../images/speakers/yuma.jpeg" alt="Yuma" className={styles.photo} style={{ borderRadius: "50%" }} />
// 				<div className={styles.description}>
// 					<h3>{speaker.name}</h3>
// 					<p>{speaker.desc}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
