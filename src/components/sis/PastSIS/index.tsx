import * as styles from "../../../pages/styles/sis.module.scss"

import React, { useState } from "react";

import { Link } from "gatsby";
import SIS2018 from "../../sis/2018";
import SIS2019 from "../../sis/2019";
import SIS2021 from "../../sis/2021";
import SIS2022 from "../../sis/2022";
import SIS2023 from  "../../sis/2023"
import Section from "../../Section";

function PastSIS() {
  const [year, setYear] = useState<"2018" | "2019" | "2021" | "2022" | "2023">("2023");

  const elemsByYear = {
    "2018": <SIS2018 />,
    "2019": <SIS2019 />,
    "2021": <SIS2021 />,
    "2023": <SIS2023 />
  };

  return (
	<div className={styles.sectionTwo}>
    <Section className={styles.sectionThree}>
      <div className={styles.btnHolder}>
        <div className={styles.sisBtn} onClick={() => setYear("2018")} style={{ backgroundColor: year === "2018" ? "var(--secondary)" : "" }}>
          SIS 2018
        </div>
        <div className={styles.sisBtn} onClick={() => setYear("2019")} style={{ backgroundColor: year === "2019" ? "var(--secondary)" : "" }}>
          SIS 2019
        </div>
        <div className={styles.sisBtn} onClick={() => setYear("2021")} style={{ backgroundColor: year === "2021" ? "var(--secondary)" : "" }}>
          SIS 2021
        </div>
        <div className={styles.sisBtn} onClick={() => setYear("2023")} style={{ backgroundColor: year === "2023" ? "var(--secondary)" : "" }}>
          SIS 2023
        </div>
        {/* <div className={styles.sisBtn} style={{ backgroundColor: year === "2022" ? "var(--secondary)" : "", cursor: "not-allowed" }}>
          SIS 2022<span>Coming Soon!</span>
        </div> */}
      </div>
      {/*<SectionTitle title="Swift Innovators’ Summit 2022" />*/}

      {elemsByYear[year]}

      <div className={styles.appBanner}>
        <h1>Changing the world. One app at a time.</h1>
        <p>
          From apps for work to apps for play, see how our Swift Accelerator Program 2022
          <br />
          students bring their ideas to life.
        </p>
        <Link to="/apps">Explore the apps</Link>
      </div>
      <br />
      <br />
    </Section>
	</div>
  );
}

export default PastSIS;
