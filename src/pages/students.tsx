import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import ReadMore from "../components/ReadMore";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./styles/students.module.scss";

function StudentsPage() {

    return (<>
        <Header />
        <main className={styles.page} style={{ backgroundImage: "url(/static/assets/genericBg.svg)" }}>
            <section className={[styles.section, styles.sectionOne].join(" ")}>
                <h1>Our Students</h1>
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
                <ReadMore />
            </section>
            <section className={[styles.section, styles.sectionTwo].join(" ")}>
                <SectionTitle title="Testimonials" />
                <div className={styles.testimonials}>
                    <div className={styles.testimonial}>
                        <StaticImage src="../images/testimonials/minjia.png" alt="minjia" className={styles.photo} style={{ borderRadius: '50%' }} />
                        <div className={styles.description}>
                            <p>I love the Swift Accelerator Programme. It made me learn a new programming language. At first, I thought Swift was something very difficult to learn, but after going through many sessions, it was not that hard after all. Through this program, I have not only learnt Swift Coding, but I have also got to know people from different schools and made good friends with them. YJ was very engaging and he was one of the best teachers that I have ever met.</p>
                            <h3><span>Min Jia,</span> Class of 2019</h3>
                        </div>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.description} style={{ textAlign: 'right' }}>
                            <p>Through this course, we were able to learn more about the swift language and deepen our understanding of App Development. Other than just learning the skills essential for app development, international speakers were invited to teach us on subjects such as prototyping and brainstorming. This course has also enabled us to meet other avid programmers in the same age group and share the same interest in programming. We were able to make many new friends and embark on app development journey with them. Overall, this journey could not have been more fun without all my friends and I can now embark on my own development journey after learning all the essential skills.</p>
                            <h3><span>Chaw Liang,</span> Class of 2019</h3>
                        </div>
                        <StaticImage src="../images/testimonials/chowliang.png" alt="chowliang" className={styles.photo} style={{ borderRadius: '50%' }} />
                    </div>
                </div>
            </section>
            <section className={[styles.section, styles.sectionThree].join(" ")}>
                <style>{`
                    .slick-prev:before, .slick-next:before { color: black }
                    .slick-track { display: flex; align-items: center; }
                `}</style>
                <Slider dotsClass={["slick-dots", styles.dotsClass].join(" ")}
                    className={styles.slider} autoplay={true} infinite={true}
                    dots={true} arrows={true}>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/kesler.png" alt="chowliang" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The Swift Accelerator Program was a fruitful experience for me, as I managed to learn a lot of coding with varying levels of difficulty. While some lessons were a little fast and felt like I couldn't catch up, there were instructors around to help me.</p>
                                <h3><span>Kesler Kok</span></h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/chowliang.png" alt="chowliang" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Through this course, we were able to learn more about the swift language and deepen our understanding of App Development. Other than just learning the skills essential for app development, international speakers were invited to teach us on subjects such as prototyping and brainstorming. This course has also enabled us to meet other avid programmers in the same age group and share the same interest in programming. We were able to make many new friends and embark on app development journey with them. Overall, this journey could not have been more fun without all my friends and I can now embark on my own development journey after learning all the essential skills.</p>
                                <h3><span>Chaw Liang,</span> Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
            <Footer />
        </main>
    </>);
}

export default StudentsPage;