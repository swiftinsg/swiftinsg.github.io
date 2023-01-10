import * as styles from "./styles/sis.module.scss";

import React, { useState } from "react";

import BannerSection from "../components/BannerSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "gatsby";
import Page from "../components/Page";
import ReadMore from "../components/ReadMore";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Text from "../components/Text";
import PastSIS from "../components/sis/PastSIS";
import SIS2023 from "../components/sis/SIS2023";
import sisBanner from "../images/banners/sisBanner.jpeg";

function SISPage() {
	const [showSIS2023, setShowSIS2023] = useState(true);

	return (
		<>
			<Header startWhite={true} />
			<Page>
				<BannerSection bg={sisBanner}>
					<h1>
						Swift Innovators'
						<br />
						Summit 2023
					</h1>
					<ReadMore />
				</BannerSection>
				<Section className={styles.sectionTwo}>
					<SectionTitle title="About Swift Innovators' Summit" />
					<Text>
						<p>
							The Swift Innovators’ Summit, organised by students for students, celebrate the app development journey of the Swift Accelerator
							students. Attendees will get to hear from distinguished speakers, explore the apps created and get started on their coding journey
							at clinics offered by our esteemed trainers.
						</p>
					</Text>
				</Section>
				{showSIS2023 ? (
						<SIS2023 />
				) : (
					<PastSIS />
				)}
				<Footer />
			</Page>
		</>
	);
}

export default SISPage;
