import * as styles from "./styles/joinus.module.scss";

import BannerSection from "../components/BannerSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Page from "../components/Page";
import React from "react";
import ReadMore from "../components/ReadMore";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import joinusBanner from "../images/banners/joinus.jpeg";
import Text from "../components/Text";
import { Link } from "gatsby";
import { useEffect } from "react";

let steps = [
	{
		title: "Introduction to programming in SwiftUI",
		desc: `This module will introduce students to SwiftUI. SwiftUI is a new, powerful declarative UI framework for Apple’s platforms. It is designed to be easy to use and pick up for beginners compared to its predecessors, UIKit and AppKit. Students will be introduced to the concept of modifiers and stack views within SwiftUI. Students will get started on Swift Playgrounds.`,
		pic: "/assets/xcode.png"
	},
	{
		title: "Introduction to programming in Swift",
		desc: `This module will introduce students to programming in the latest version of the Swift programming language. Swift is a modern, open-source language created by Apple, designed to be easy for beginners to learn, and powerful for advanced users to utilise in creating iOS apps.
                Students will be introduced to coding concepts in Swift, using Xcode Playgrounds: constants, variables, data types, operators, and control flow. `
	},
	{
		title: "State and Interactivity",
		desc: `Students will learn to create interactive apps by using interactive elements, stored states, and animations.
                They will learn to use @State variables, frames and positioning, more modifiers and animations. `
	},
	{
		title: "Design and Prototyping",
		desc: `This module introduces students to design thinking philosophies, and how to apply them to create, validate, and pitch ideas, how to find product-market fit, and do basic wireframing. We will include case studies on technology products—well known ones, as well as our own, which are more obscure but rich in lessons learned. 
                They will be introduced to Keynote for prototyping, resources such as Apple’s Human Interface Guidelines and accessibility guidelines.
                On the design front, students will be introduced to user interface and user experience (UI/UX) design tools, preferably free ones such as XD or Figma, to prototype their own apps.`
	},
	{
		title: "Exploring Swift",
		desc: `Students will learn intermediate-level Swift features, essential for building apps in SwiftUI such as arrays, structs, properties and methods. Students will also be introduced to closures.`
	},
	{
		title: "Array-Based App",
		desc: `Students will make use of their knowledge of arrays and structs to create a multi-screen array based app`
	},
	{
		title: "Swift in-depth",
		desc: `Students will learn about in-depth features of the Swift programming language which are commonly used in SwiftUI, namely, iteration and optionals.`
	},
	{
		title: "List-Based Apps",
		desc: `Students will learn to create an app that allows them to perform basic CRUD (Create, Read, Update, Delete) operations. Students will also learn more about manipulating arrays and navigation views in SwiftUI.`
	},
	{
		title: "Persistence and Packages",
		desc: `This module covers more technically advanced features often found in iOS apps, particularly permanent data storage (on device or in the cloud), and working with external web services to store and retrieve data. 
                Students will also begin to make full use of iOS device capabilities by learning and utilising powerful built-in iOS application programming interfaces (APIs). These include web and API access, geolocation, accelerometer readings, and more. Students will also be exposed to commonly-used external libraries that allow them to quickly implement powerful features while saving on development time.`
	},
	{
		title: "Introduction to UIKit",
		desc: `This module covers UIKit and how students can integrate UIKit views into their SwiftUI apps. UIKit is an imperative UI framework developed by Apple for creating user interfaces for iOS/iPadOS devices. Currently, many technologies and packages, including Apple’s, rely on UIKit to work as it provides more flexibility than SwiftUI.
                The module will ease students from SwiftUI’s declarative syntax to UIKit’s imperative syntax by introducing them to concepts like SwiftUI Path, a way to draw paths and create rich vectors imperatively, within SwiftUI, similar to Python Turtle. Following which, they will be introduced to UIView, UIViewRepresentable and Autolayout.
                Importantly, they will be focusing on programmatic UIKit instead of Storyboards as programmatic UIKit has better interoperability with SwiftUI.`
	},
	{
		title: "Building, marketing, and launching your app",
		desc: `Creating an app is never just about the technical requirements; companies and developers have to make an effort to get noticed in a store containing millions of other apps. 
                In this final module, students will revise their design thinking principles to ensure they don’t “make something nobody wants”, revenue models available to apps, how to project-manage apps, and pitch them to “investors” and customers. 
                Finally, students will be closely guided through the process of proposing, designing, implementing, and finally submitting their apps to the Apple App Store for public consumption. Students will also learn how best to present and tell a story about their apps.`
	}
];

function StudentsPage() {
	useEffect(() => {
		document.title = "Join Us"
	}, [])
	return (
		<>
			<Header startWhite={true} />
			<Page className={styles.page}>
				<BannerSection bg={joinusBanner}>
					<h1>Join Us</h1>
					{/* <h3 id={styles.bodyText}>Congratulations to successful applicants of the Class of 2022</h3> */}
					{/* <h3 id={styles.bodyText}>Email <Link className={styles.linkText} href="mailto:hello@swiftinsg.org">hello@swiftinsg.org</Link> to find out more, or follow us on social media to keep up with the Class of 2022.</h3> */}
					<h3 style={{ color: "white" }}>
						<h3>Want to learn more about Swift Accelerator Program and how you can be a part of the Class of 2023?</h3>
						<h3>
							<Link
								style={{
									padding: "10px 15px",
									backgroundColor: "orange",
									textDecoration: "none",
									borderRadius: 10,
									color: "black",
									display: "inline-block"
								}}
								to="https://tk.sg/swift2023briefing"
								target="_blank"
							>
								Sign up for the briefing
							</Link>
						</h3>
						<h3>Date: 4 February 2023 <br/> Time: 10am to 11am <br/> Location: Apple Innovis</h3>
					</h3>
					<ReadMore />
				</BannerSection>
				{/* <Section className={styles.sectionTwo}>
                <SectionTitle title="Application Details" />
                <Text>
                    <p>To apply for the Swift Accelerator Programme, applicants must demonstrate strong aptitude and interest in programming and app design. The application process is as follows:  </p>
                    <ol>
                        <li>Take note of the important dates below for deadlines and briefings. </li>
                        <li>Confirm that you can attend the <b>vast majority</b> of the scheduled sessions. <Link to="https://cld.tk.sg/6quE6O6P">See the schedule below.</Link></li>
                        <li>Try out Unit 1 of our <Link to="https://tk.sg/swiftui-videos-unit1">SwiftUI video series</Link>. You may use <Link to="https://www.apple.com/swift/playgrounds/">Swift Playgrounds</Link> on iPad or Mac for this. If you have any issues, email us at <Link to="mailto:hello@swiftinsg.org">hello@swiftinsg.org</Link>.</li>
                        <ul>
                            <li>If you are using a managed iPad that is unable to build App projects or using Swift Playgrounds 4 for Mac, you can create a normal Playground and paste in the code from <Link to="https://tk.sg/swiftpgtemplate">https://tk.sg/swiftpgtemplate</Link>.</li>
                        </ul>
                        <li>Prepare a <b>minute-long</b> video introducing yourself and your end-product based on [3]. Reflect on your experience creating it (how you got it to work, any challenges, anything new you've tried, etc.). Our focus will be on the content of the video and not the video production quality. However, please ensure the video and audio are clear enough that we are able to understand what you say.</li>
                        <li>Prepare any supporting documents, links or any information you think might be relevant when we consider your application</li>
                        <li>Complete an individual entrance test and survey. The test includes coding, design, essay questions (involving the aforementioned video), and should be completed in about an hour.</li>
                    </ol>
                    <p><b>Important note:</b> The programme is fully subsidised for successful applicants. Please read through the application form carefully, and ensure, before applying:</p>
                    <ol>
                        <li>You can attend a vast majority of the scheduled sessions. <Link to="https://cld.tk.sg/6quE6O6P">See the schedule below.</Link></li>
                        <li>You're interested enough in coding, design, and app development to spend a huge chunk of your free time learning and practising — the entire programme lasts 180 hours, and you'll spend more time than that coding on your own.</li>
                        <li>You're up for a challenge!</li>
                    </ol>
                </Text>
            </Section> */}
				<Section className={styles.sectionTwo}>
					<SectionTitle title="Frequently Asked Questions" />
					<Text>
						<ul>
							<li>
								<b>Does the programme cost anything to join?</b> No, the classes and optional certification are sponsored by IMDA.
							</li>
							<li>
								<b>Must students be from the Infocomm/Media/AV Club to join?</b> We will give priority to students from these clubs, as they are
								IMDA-supported clubs and this is an IMDA-sponsored programme.{" "}
							</li>
							<li>
								<b>Can Sec 4s/JC students join?</b> Only if your schedule allows — please take a careful look at the schedule on this page,
								which is designed for Sec 1-3. IP Year 4s have joined the programme and found our schedule doesn't clash much; we suspect
								O-level and JC students might have a tougher time in this regard.{" "}
							</li>
							<li>
								<b>Do we need a Mac for the programme?</b> Yes. If you don't have one, we should be able to arrange a loan for the programme.
								But in case we can't get enough loans, we may need to prioritise applicants who have their own.{" "}
							</li>
							<li>
								<b>Why did you push back the application deadline?</b> Teachers we spoke to at the graduation this week agreed this holiday week
								is quite busy for students (and we're guilty of adding to that, running 3 other ongoing competitions & challenges), so this
								extension would allow students to spend a bit more time on their submissions. Past participants from the Swift Explorers programme, 
								especially finalists in the showcase phase, would be well equipped to apply for the Swift Accelerator Programme!{" "}
							</li>
							<li>
								<b>My iPad PLD can't run Swift Playgrounds apps, how can I do the activity required for the application?</b> Please watch{" "}
								<Link to="https://www.youtube.com/watch?v=NGBcPkwOAc0">this video</Link> for a workaround.
							</li>
							<li>
								<b>The application requires an iPad, and I don't have one. How?</b> If your school can loan you an iPad for 2-3 hours, you
								should be able to complete that segment in that time. Alternatively, email us at hello@swiftinsg.org to arrange a time to come
								to our office (at Henderson Road) to use our iPads for this activity.
							</li>
							<li>
								<b>What's the difference between this and the Swift Explorers Programme?</b> We are also supporting this programme hosted
								by Crescent Girls' School, which is a light introduction to prototyping and coding, suitable for anyone with a broad interest in
								design and app development. The Swift Accelerator Programme, on the other hand, goes much deeper into app development, with your
								own app as a final product. Find out more at{" "}
								<Link to="https://www.crescent.edu.sg/cradle/swift-explorers-singapore-ses/about-ses">this link</Link>
							</li>
						</ul>
					</Text>
				</Section>
				{/* <Section className={styles.sectionTwo}>
					<SectionTitle title="Schedule for 2022" />
					<Text>
						<p>
							Please note, this schedule is very tentative, and based on having most classes conducted online — we will aim to bring together the
							class for face-to-face lessons at Apple, but only if allowed by prevailing safe distancing measures.
						</p>
					</Text>
					<div style={{ textAlign: "center" }}>
						<img className={styles.schedule} src="/assets/schedule2022.png"></img>
						<p>
							<b>
								You may download a copy <Link href="https://cld.tk.sg/6quE6O6P">here</Link>
							</b>
						</p>
					</div>
				</Section> */}
				<Section className={styles.timeline}>
					<SectionTitle title="Programme Outline" />
					<div>
						{steps.map((s) => (
							<Outline {...s} />
						))}
					</div>
				</Section>
				<Footer />
			</Page>
		</>
	);
}

function Outline({ title, desc, pic }: { title: string; desc: string; pic?: string }) {
	return (
		<div className={styles.outlineDiv}>
			<div>
				<h1>{title}</h1>
				<p>
					{desc.split("\n").map((d) => (
						<>
							{d}
							<br />
							<br />
						</>
					))}
				</p>
			</div>
			{pic ? <img src={pic} /> : ""}
		</div>
	);
}

export default StudentsPage;
