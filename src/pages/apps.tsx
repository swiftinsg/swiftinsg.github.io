import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./styles/apps.module.scss";

const apps = {
    current: [
        { title: "Do It", description: "Stay on top of your tasks.", icon: "2019/Doit.png", link: "https://apps.apple.com/us/app/doit-do-it/id1485829640?ls=1" },
        { title: "Tasko", description: "Prioritise tasks and manage your time", icon: "2019/Tasko.png", link: "https://apps.apple.com/us/app/tasko/id1485959482?ls=1" },
        { title: "Scheduler Pro", description: "Get motivated to complete your tasks", icon: "2019/Scheduler%20Pro.png", link: "https://apps.apple.com/us/app/scheduler-pro-plan-your-work/id1486135477" },
        { title: "Listè", description: "Productivity made easy", icon: "2019/Liste.png", link: "https://apps.apple.com/us/app/listé/id1486116734" },
        { title: "Tyred", description: "The easy photo todos", icon: "2019/Tyred.png", link: "https://apps.apple.com/us/app/tyred-easy-photo-todos/id1486117252?ls=1" }
    ],
    productivity: [
        { title: "StudyFly", description: "Digitalise your written notes", icon: "2020/StudyFly.png", link: "https://apps.apple.com/sg/app/studyfly/id1545511275", video: "https://youtu.be/eS-pigaD62Q" },
        { title: "Habitat", description: "Your tasks and to-do list, gamified", icon: "2020/Habitat.png", link: "https://apps.apple.com/sg/app/habitat-do-tasks-grow-trees/id1546610193", video: "https://youtu.be/J7GCuMQmLFM" },
        { title: "Do It", description: "Stay on top of your tasks.", icon: "2019/Doit.png", link: "https://apps.apple.com/us/app/doit-do-it/id1485829640?ls=1" },
        { title: "Tasko", description: "Prioritise tasks and manage your time", icon: "2019/Tasko.png", link: "https://apps.apple.com/us/app/tasko/id1485959482?ls=1" },
        { title: "Scheduler Pro", description: "Get motivated to complete your tasks", icon: "2019/Scheduler%20Pro.png", link: "https://apps.apple.com/us/app/scheduler-pro-plan-your-work/id1486135477" },
        { title: "Listè", description: "Productivity made easy", icon: "2019/Liste.png", link: "https://apps.apple.com/us/app/listé/id1486116734" },
        { title: "Tyred", description: "The easy photo todos", icon: "2019/Tyred.png", link: "https://apps.apple.com/us/app/tyred-easy-photo-todos/id1486117252?ls=1" },
        { title: "Tasks - Productivity Elevated", description: "Stay focused.", icon: "2018/Tasks.png", link: "https://apps.apple.com/us/app/tasks-productivity-elevated/id1440454388" }
    ],
    education: [
        { title: "Enviroquest", description: "Saving the Earth, made fun", icon: "2020/EnviroQuest.png", link: "https://apps.apple.com/sg/app/enviroquest/id1546701399", video: "https://youtu.be/MfDweFiZCVQ" },
        { title: "CATmistry", description: "Chemistry, gamified.", icon: "2020/CATmistry.png", link: "https://apps.apple.com/sg/app/catmistry/id1545311327", video: "https://youtu.be/zRYNBemX1RU" },
        { title: "ReadingPal", description: "Your collaborative reader", icon: "2019/ReadingPal.png", link: "https://apps.apple.com/us/app/readingpal/id1485960531?ls=1" },
        { title: "STUDI ", description: "Education ", icon: "2019/STUDI.png", link: "https://apps.apple.com/us/app/studi-studying-made-easy/id1486737527?ls=1" },
        { title: "Eureka - Study app", description: "Helping you to study smart", icon: "2019/Eureka.png", link: "https://apps.apple.com/us/app/eureka-study-app/id1486120976?ls=1" },
        { title: "Quizercise", description: "Health & Fitness", icon: "2019/Quizercise.png", link: "https://apps.apple.com/us/app/quizercise/id1486275677?ls=1" },
        { title: "Parkgoer", description: "Parkgoer. Parks today!", icon: "2018/Parkgoer.png", link: "https://apps.apple.com/us/app/parkgoer/id1441745725" },
        { title: "Fractal", description: "The non-intrusive calculator.", icon: "2018/Fractal.png", link: "https://apps.apple.com/us/app/fractal-a-calculator/id1441648055" },
    ],
    lifestyle: [
        { title: "Grocermi", description: "Track what is in your fridge", icon: "2020/Grocermi.png", link: "https://apps.apple.com/us/app/grocermi/id1548968304", video: "https://youtu.be/X743H_nPyfQ" },
        { title: "Fridge", description: "Get recipes with what is in your fridge", icon: "2020/Fridge.png", link: "https://apps.apple.com/us/app/fridge-track-your-food/id1547398070", video: "https://youtu.be/FqfKPNF9hnM" },
        { title: "Anything", description: "Helping you meditate and calm down", icon: "2020/Anything.png", link: "https://apps.apple.com/sg/app/anything-a-meditation-app/id1545318664", video: "https://youtu.be/kFoZ-rbI5wQ" },
        { title: "Dollar", description: "We save your cents", icon: "2019/Dollar.png", link: "https://apps.apple.com/us/app/dollar/id1486122185?ls=1" },
        { title: "Work It Out", description: "Fitness Made Easy", icon: "2019/Work%20It%20Out.png", link: "https://apps.apple.com/us/app/work-it-out-fitness-app/id1486118564?ls=1" },
        { title: "chARacters", description: "Experience Reality in a different way", icon: "2019/chARacters.png", link: "https://apps.apple.com/us/app/characters-an-ar-photo-app/id1485831264?ls=1" },
        { title: "IdeaGenerator", description: "Education", icon: "2019/Idea%20Generator.png", link: "https://apps.apple.com/us/app/ideagenerator/id1486526473?ls=1" },
        { title: "Brush Now", description: "The proper way to brush", icon: "2018/BrushNow.png", link: "https://apps.apple.com/us/app/brushnow-toothbrush-timer/id1441508610" }
    ],
    travel: [
        { title: "BuSG", description: "Checking bus arrival timings and routes easily", icon: "2020/BuSG.png", link: "https://apps.apple.com/sg/app/busg/id1545571389", video: "https://youtu.be/vd2Su2pCW-k" },
        { title: "Triplanner", description: "Plan your trips and staycations!", icon: "2020/Triplanner.png", link: "https://apps.apple.com/sg/app/triplanner-your-travel-pal/id1544696258", video: "https://youtu.be/uvYTyCLobxA" },
        { title: "MacRitchie Trails", description: "Helping you find your way around MacRitchie Reservoir", icon: "2020/MacRitchie%20Trails.png", link: "https://apps.apple.com/us/app/macritchie-trails/id1547956127", video: "https://youtu.be/Cs8XZ54tdek" },
        { title: "FootpRInt", description: "Find your lost items easily", icon: "2020/FootpRInt.png", link: "https://apps.apple.com/us/app/footprint/id1549189068", video: "https://youtu.be/HvBswMA7bvQ" },
        { title: "KillStep", description: "Gamifying your exercise experience!", icon: "2020/KillStep.png", link: "https://apps.apple.com/us/app/killstep/id1546871822", video: "https://youtu.be/fXEfZeYiPEY" }
    ],
    finance: [
        { title: "Wishey", description: "A budgeting app.", icon: "2020/Wishey.png", link: "https://apps.apple.com/sg/app/wishey/id1545938094", video: "https://youtu.be/nS-TRJ-TFAA" }
    ],
    foodAndDrinks: [
        { title: "Recipely", description: "A recipe app.", icon: "2020/Recipely.png", link: "https://apps.apple.com/sg/app/recipely/id1545119133", video: "https://youtu.be/2tT_S5tfeIk" }
    ],
    entertainment: [
        { title: "Dice", description: "Pick a number", icon: "2018/Dice.png", link: "https://apps.apple.com/us/app/dice-pick-a-number/id1441538796" }
    ]
}

function StudentsPage() {

    return (<>
        <Header />
        <main className={styles.page}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <h1>Apps</h1>
                {/*<div className={styles.stats}>   
                    <div>
                        <h1>33</h1>
                        <h3>Apps Published</h3>
                    </div>
                </div>*/}
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <SectionTitle title="Current Class Apps" />
                <div className={styles.appHolder}>
                    {apps.current.map((app) => <App {...app} />)}
                </div>
                <SectionTitle title="Apps by our Alumni" />
                <h2>Productivity</h2>
                <div className={styles.appHolder}>
                    {apps.productivity.map((app) => <App {...app} />)}
                </div>
                <h2>Education</h2>
                <div className={styles.appHolder}>
                    {apps.education.map((app) => <App {...app} />)}
                </div>
                <h2>Lifestyle</h2>
                <div className={styles.appHolder}>
                    {apps.lifestyle.map((app) => <App {...app} />)}
                </div>
                <h2>Travel</h2>
                <div className={styles.appHolder}>
                    {apps.travel.map((app) => <App {...app} />)}
                </div>
                <h2>Food and Drinks</h2>
                <div className={styles.appHolder}>
                    {apps.foodAndDrinks.map((app) => <App {...app} />)}
                </div>
                <h2>Finance</h2>
                <div className={styles.appHolder}>
                    {apps.finance.map((app) => <App {...app} />)}
                </div>
                <h2>Entertainment</h2>
                <div className={styles.appHolder}>
                    {apps.entertainment.map((app) => <App {...app} />)}
                </div>
            </section>
            <Footer />
        </main>
    </>);
}

function App({ title, description, icon, link, video }: { title: string; description: string; icon: string; link: string; video?: string }) {

    return (<Link to={link}><div className={styles.app}>
        <div style={{ backgroundImage: `url(/assets/appIcons/${icon})` }} />
        <div>
            <span>{title}</span>
            <span>{description}</span>
            {video ? <span><Link to={video}>Watch the video</Link></span> : ""}
        </div>
    </div></Link>)
}

export default StudentsPage;