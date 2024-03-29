import * as styles from "./styles/privacy.module.scss";

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

function PrivacyPage() {

    useEffect(() => {
        document.title = "Privacy Policy";
    });


    return (<>
        <Header />
        <Page genericBackground={true}>
            <BannerSection>
                <figure />
                <h1>Privacy Policy</h1>
                <ReadMore />
            </BannerSection>
            <Section className={styles.section}>
                <SectionTitle title="Privacy Policy"/>
                <Text>
                    <p>Effective date: January 06, 2021</p>
                    <p>​Swift Accelerator Apps ("us", "we", or "our") operates the Swift Accelerator Apps mobile application (the "Service").</p>
                    <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Swift Accelerator Apps is created with the help of the <Link to="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">Free Privacy Policy Generator</Link>.</p>
                    <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Information Collection And Use"/>
                <Text>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Types of Data Collected"/>
                <Text>
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                    <p><b>Personal Data</b></p>
                    <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li>Cookies and Usage Data</li>
                    </ul>
                    <p><b>Usage Data</b></p>
                    <p>When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data ("Usage Data").</p>
                    <p><b>Tracking & Cookies Data</b></p>
                    <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                    <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
                    <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                    <p>Examples of Cookies we use:</p>
                    <ul>
                        <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                        <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
                        <li>Security Cookies. We use Security Cookies for security purposes.</li>
                    </ul>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Use of Data"/>
                <Text>
                    <p>Swift Accelerator Apps uses the collected data for various purposes:</p>
                    <ul>
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                        <li>To monitor the usage of the Service</li>
                        <li>To detect, prevent and address technical issues</li>
                    </ul>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Transfer Of Data"/>
                <Text>
                    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
                    <p>If you are located outside Singapore and choose to provide information to us, please note that we transfer the data, including Personal Data, to Singapore and process it there.</p>
                    <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
                    <p>Swift Accelerator Apps will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Disclosure Of Data"/>
                <Text>
                    <p><b>Legal Requirements</b></p>
                    <p>Swift Accelerator Apps may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul>
                        <li>To comply with a legal obligation</li>
                        <li>To protect and defend the rights or property of Swift Accelerator Apps</li>
                        <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>To protect the personal safety of users of the Service or the public</li>
                        <li>To protect against legal liability</li>
                    </ul>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Security Of Data"/>
                <Text>
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Service Providers"/>
                <Text>
                    <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                    <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Links To Other Sites"/>
                <Text>
                    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Children's Privacy"/>
                <Text>
                    <p>Our Service does not address anyone under the age of 18 ("Children").</p>
                    <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Changes To This Privacy Policy"/>
                <Text>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                </Text>
            </Section>
            <Section className={styles.subSection}>
                <SectionTitle title="Contact Us"/>
                <Text>
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul>
                        <li>By visiting this page on our website: https://www.swiftinsg.org/contact-us</li>
                    </ul>
                </Text>
            </Section>

            <Footer />
        </Page>
    </>);
}

export default PrivacyPage;