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
                        <StaticImage src="../images/testimonials/minjia.jpg" alt="Min Jia" className={styles.photo} style={{ borderRadius: '50%' }} />
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
                        <StaticImage src="../images/testimonials/chawliang.jpg" alt="Chaw Liang" className={styles.photo} style={{ borderRadius: '50%' }} />
                    </div>
                </div>
            </section>
            <section className={[styles.section, styles.sectionThree].join(" ")}>
                <style>{`
                    .slick-prev:before, .slick-next:before { color: black }
                    .slick-track { display: flex; align-items: center; }
                `}</style>
                <Slider dotsClass={["slick-dots", styles.dotsClass].join(" ")}
                    className={styles.slider} autoplay={true} autoplaySpeed={10000} infinite={true}
                    dots={true} arrows={true} > 
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/rochelle.jpg" alt="Rochelle" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>This course has been an extremely insightful and eye-opening experience. Besides learning an entirely new programming language, I was able to meet like-minded students with similar interests as me, and also got the privilege to touch on other subjects like prototyping, design, marketing, and so much more!</p>
                                <h3><span>Rochelle Teh</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/haojun.jpg" alt="Hao Jun" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The Swift Accelerator Programme has been an extremely fun and fulfilling experience, as I was given an opportunity to not only publish my app on the global stage but also learn from my peers, spread my passion for coding, and hone my leadership skills by planning for and managing the Swift Innovators’ Summit 2021.</p>
                                <h3><span>Neo Hao Jun</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/yinjia.jpg" alt="Yin Jia" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The past eight months have been incredibly enriching, fulfilling and of course, entertaining. Even though everything was carried out online last year, everything was still perfectly planned out and executed. I am definitely going to miss SAP 2020, be it the trainers, alumni or my friends and batchmates.</p>
                                <h3><span>Shu Yinjia</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/kiera.jpg" alt="Kiera" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>I learnt so much from the Swift Accelerator Programme. Not only was I given a chance to release an app on the App Store, but have also become more technology-ready for the future. Along the way, I made many new friends and developed my love for programming. Overall, it was a fun and enriching experience!</p>
                                <h3><span>Kiera Nadine</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/yunze.jpg" alt="Yunze" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Swift Accelerator is a great programme, not just because of the things we learn, but also about the people we meet. During this programme I met a lot of amazing, funny, and interesting people who had the same interests as me. I highly recommend everybody who wants to learn coding to join!</p>
                                <h3><span>Wang Yunze</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/rachelgoh.jpg" alt="Rachel Goh" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Swift Accelerator was a fun, unique, and amazing experience. Although I started with zero experience in Swift, by the end of the course, not only did I create my own app, but I was able to pick up a new coding language altogether! The interns and teachers were also very friendly and helpful.</p>
                                <h3><span>Rachel Goh</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/akshara.jpg" alt="Akshara" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The Swift Accelerator Programme was incredibly enriching; I learnt not just how to code in Swift, but how to be more patient and I made new friends as well! Despite the difficulties that came with COVID-19, we made it through, and that’s great.</p>
                                <h3><span>Mantha Akshara</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/nicoletang.jpg" alt="Nicole Tang" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Because of COVID, many students didn’t get to make many new friends in school, much less outside of school. Thankfully, I got to meet many amazing people through the Swift Accelerator Programme and we all have a common interest: coding!</p>
                                <h3><span>Nicole Tang</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/nicholas.jpg" alt="Nicholas" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The Swift Accelerator Programme was an amazing opportunity to expand my skillset and knowledge in a fun and engaging way. Taking part was a pleasure, despite the COVID-19 situation, thanks to YJ  and the alumni who helped us greatly along the way and would engage and connect with us by chatting with us on Discord.</p>
                                <h3><span>Nicholas Johansan</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/youyou.jpg" alt="Youyou" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>SAP is absolutely fun! And very enriching as well. We get to do all sorts of exciting, funny projects, and there’s so much to learn beside coding: designing, marketing, making friends with introverts, amongst others. It has been such a great experience for me.</p>
                                <h3><span>Yu Youyou</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/kensley.jpg" alt="Kensley" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The Swift Accelerator Programme is a enjoyable course where you get to meet new friends and collaborate with different people from other schools. The alumni are also affable people who will help you with any problems that you might encounter.</p>
                                <h3><span>Kensley Liong</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/zerui.jpg" alt="Zerui" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>During the programme, I learnt many things such as autolayout and designing an app. The course is fun and interactive, with quizzes at the end of each lesson to test our understanding of each topic. YJ is also a very fun and engaging teacher, one of the best I have ever met.</p>
                                <h3><span>Wang Zerui</span>, Class of 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/qianhuay.jpg" alt="Qian Huay" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Being in the Swift Accelerator Program gave me the chance to meet peers who share an interest in coding with me. Other than learning Swift, I've also picked up useful skills along the way, such as pitching! I thoroughly enjoyed my time in this program!</p>
                                <h3><span>Lai Qian Huay</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/shadenwong.jpg" alt="Shaden" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>SAP has definitely improved my skills not only in coding but also in other aspects like marketing, designing and prototyping. It also has various sessions like a storytelling session to get us to collaborate and communicate with others who we are not familiar with. SAP is really engaging, not like any normal ICT lesson which you would sleep in. Over the course of these few months, I have definitely not regretted coming to this course.</p>
                                <h3><span>Shayden Wong</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/kaile.jpg" alt="Kaile" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>I really enjoyed this course as I have learnt the basic skills to create app, something that I wanted to know how to do, even though I can only make Apple apps. I have made friends who can help me with the harder parts of app development and in projects overall.</p>
                                <h3><span>Kaile</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/chenjun.jpg" alt="Chen Jun" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>It was fun and exciting. I learnt quite a lot of things like swift programming, etc. I also make new friends and I can remember some people's names. It is a good learning experience , I will regret it if I didn't join this program. Even though it is an additional workload on top of our homework, it was definitely enriching.</p>
                                <h3><span>Poon Chen Jun</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/faithlim.jpg" alt="Faith" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>This program was extremely fun and interesting. I learnt new things such as table views, tab bars and collection views. These new skills that I learnt are very helpful to me in developing my own apps. For example, I have created an app based on a CRUD app that I learnt in this program. I have also gotten to know new people and made new friends. This program has benefitted me greatly both in the knowledge and social aspects. I hope to be able to return next year to help out.</p>
                                <h3><span>Faith Lim</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/howie.jpg" alt="Howie" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Swift Accelerator was extremely tiring but fun. I got to learn how to code and use many useful applications and websites to create my own app. Because of this, I think the Swift Accelerator Program was not only fun and enjoyable, but it was also helpful and educational. Made new friends too :D.</p>
                                <h3><span>Howie</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/shahul.jpg" alt="Shahul" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>I have learnt a lot about app development. I met a lot of people as well. This course got me really interested in computers and coding and I think it will help me in the future as well. It has been fun and I have really enjoyed myself. If given the option, I would go for similar classes.​</p>
                                <h3><span>Mohamed Shahul Hameed Niyaz</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/wenqi.jpg" alt="Wen Qi" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>I learnt a lot from this programme, especially the friends app. It may be tricky at first when I am following instructions when making an app because I get confused, but the learning experience is very fun and enjoyable.</p>
                                <h3><span>Koo Wen Qi</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/aida.jpg" alt="Aida" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>I think its been a great experience and I've definitely learned a lot. I have made a few friends in the course, who are helpful towards me. I would love to have more group projects or activities where all of us had to be mixed up! The whole program was very fun and I enjoyed it thoroughly.</p>
                                <h3><span>Nurul Aida</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/shrimay.jpg" alt="Shrimay" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Very fun. It was interesting to learn a unique language like Swift that uses pointers. It was also interesting to use a coding environment that was a mix of drag-and-drop as well as pure coding. The file hierarchy and distributed code in Swift also gave me confidence to implement such good practices in my coding projects in other languages like Python. The food was great too. 10/10 would do it again.</p>
                                <h3><span>Shrimay</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/tomyou.jpg" alt="Tom You" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>I had a decent experience in the swift accelerator programme. While some lessons takes place during the holidays, nevertheless, I did manage to get to know more people. I also liked learning about app development and how to design better apps.</p>
                                <h3><span>Tom You</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/miruldhla.jpg" alt="Mirudhla" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>Swift Accelerator was definitely a fulfilling and new experience. From being disappointed about there being no more hot chocolate to breaking fingers while trying to code as fast as YJ, I have made many memories and friends here. I am also grateful to have gotten this privilege to learn to code better and even make my apps and showcase them. Even though, I had to sacrifice many Saturdays and wake up early to rush to one north, I am happy to have gotten this chance to be part of this great programme.​</p>
                                <h3><span>Gnanavelou Mirudhla</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/kesler.jpg" alt="Kesler" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>The Swift Accelerator Program was a fruitful experience for me, as I managed to learn a lot of coding with varying levels of difficulty. While some lessons were a little fast and felt like I couldn't catch up, there were instructors around to help me.</p>
                                <h3><span>Kesler Kok</span>, Class of 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={[styles.testimonial, styles.carouselTestimonial].join(" ")}>
                            <StaticImage src="../images/testimonials/prakhar.jpg" alt="Prakhar" className={styles.photo} style={{ borderRadius: '50%' }} />
                            <div className={styles.description}>
                                <p>It was, in one word, excellent. I have learnt many new things. First, everything about Xcode and Swift. The instructors here are very nice (big shoutout to YJ especially) and patient. They explain concepts clearly and teach us how to solve problems as well. Second, I made friends! That's one of the things I enjoyed, having great company. My friends and instructors supported me throughout this incredible journey. I thank them for being there when I needed them. I am so happy that I got selected for this programme. I would also like to thank IMDA and Apple for hosting such a great programme to develop the future app developers from Singapore. I am very very grateful! </p>
                                <h3><span>Prakhar Nilesh Trivedi</span>, Class of 2019</h3>
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