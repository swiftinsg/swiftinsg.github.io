import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./styles/students.module.scss";

import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";
import React from "react";
import ReadMore from "../components/ReadMore";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Slider from "react-slick";
import studentsBanner from "../images/banners/students.jpeg"

const testimonials = {
    top: [
        { name: "Yee Jia Chen", img: "jiachen.png", year: "2018", desc: "The Swift Accelerator Programme provided a fun and engaging environment to develop essential skills, such as programming, design thinking, pitching and UI/UX design. These experiences inspired me to spread my love of coding by volunteering to help out the Class of 2019 and 2020 and, eventually, becoming the assistant trainer of the programme in 2021." },
        { name: "Min Jia", img: "minjia.jpg", year: "2019", desc: "I love the Swift Accelerator Programme. It made me learn a new programming language. At first, I thought Swift was something very difficult to learn, but after going through many sessions, it was not that hard after all. Through this program, I have not only learnt Swift Coding, but I have also got to know people from different schools and made good friends with them. YJ was very engaging and he was one of the best teachers that I have ever met." },
        { name: "Neo Hao Jun", img: "haojun.jpg", year: "2020", desc: "The Swift Accelerator Programme has been an extremely fun and fulfilling experience, as I was given an opportunity to not only publish my app on the global stage but also learn from my peers, spread my passion for coding, and hone my leadership skills by planning for and managing the Swift Innovators’ Summit 2021." }
    ],
    carousel: [
        { name: "Carl Ian Voller", img: "carl.png", year: "2018", desc: "Having the opportunity to attend the Swift Accelerator Programme is truly a one-of-a-kind experience. The programme gave me an in-depth and thorough look at the world of iOS App development, with many hands-on mini-projects to help hone my skills in the art. Furthermore, the connections made and friendships forged throughout the duration of the course are simply invaluable for my future career ambitions." },
        { name: "Sean Wong", img: "sean.jpeg", year: "2018", desc: "The Swift Accelerator Programme is one of the most enriching projects I am proud to be a part of. Over the course of the programme, the acquaintances and friends that I have, along with watching projects get built over time when volunteering as alumni are but some of the many amazing experiences the programme has to offer." },
        { name: "Shayden Wong", img: "shadenwong.jpg", year: "2019", desc: "SAP has definitely improved my skills not only in coding but also in other aspects like marketing, designing and prototyping. It also has various sessions like a storytelling session to get us to collaborate and communicate with others who we are not familiar with. SAP is really engaging, not like any normal ICT lesson which you would sleep in. Over the course of these few months, I have definitely not regretted coming to this course." },
        { name: "Faith Lim", img: "faithlim.jpg", year: "2019", desc: "This program was extremely fun and interesting. I learnt new things such as table views, tab bars and collection views. These new skills that I learnt are very helpful to me in developing my own apps. For example, I have created an app based on a CRUD app that I learnt in this program. I have also gotten to know new people and made new friends. This program has benefitted me greatly both in the knowledge and social aspects. I hope to be able to return next year to help out." },
        { name: "Nicholas Johansa", img: "nicholas.jpg", year: "2020", desc: "The Swift Accelerator Programme was an amazing opportunity to expand my skillset and knowledge in a fun and engaging way. Taking part was a pleasure, despite the COVID-19 situation, thanks to YJ  and the alumnis who helped us greatly along the way and would engage and connect with us by chatting with us on Discord." },
        { name: "Kiera Nadine", img: "kiera.jpg", year: "2020", desc: "I learnt so much from the Swift Accelerator Programme. Not only was I given a chance to release an app on the App Store, but have also become more technology-ready for the future. Along the way, I made many new friends and developed my love for programming. Overall, it was a fun and enriching experience!" }
    ]
}

function StudentsPage() {

    return (<>
        <Header startWhite={true} />
        <Page>
            <BannerSection bg={studentsBanner}>
                <h1>Our Students</h1>
                <ReadMore />
            </BannerSection>
            <div className={styles.stats}>   
                <div>
                    <h1>154</h1>
                    <h3>Alumni</h3>
                </div>
                <div>
                    <h1>31</h1>
                    <h3>Schools</h3>
                </div>
            </div>
            <Section className={styles.sectionTwo}>
                <SectionTitle title="Testimonials" />
                <div className={styles.testimonials}>
                    {testimonials.top.map((t, i) => <Testimonial i={i} {...t} />)}
                </div>
            </Section>
            <Section className={styles.sectionThree}>
                <style>{`
                    .slick-prev:before, .slick-next:before { color: black }
                    .slick-track { display: flex; align-items: center; }
                `}</style>
                <Slider dotsClass={["slick-dots", styles.dotsClass].join(" ")}
                    className={styles.slider} autoplay={true} infinite={true}
                    dots={true} arrows={true}>
                    {testimonials.carousel.map((t) => <div>
                        <Testimonial {...t} />
                    </div>)}
                </Slider>
            </Section>
            <Footer />
        </Page>
    </>);
}

function Testimonial({ img, desc, name, year, i }: { img: string; desc: string; name: string; year: string; i?: number }) {

    return (<div
        className={[styles.testimonial, styles.carouselTestimonial].join(" ")}
        style={i % 2 == 1 ? { textAlign: 'right', flexDirection: 'row-reverse' } : {}}>
        <img src={`/assets/testimonials/${img}`} className={styles.photo} />
        <div className={styles.description}>
            <p>{desc}</p>
            <h3><span>{name},</span> Class of {year}</h3>
        </div>
    </div>);
}

export default StudentsPage;