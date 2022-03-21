import React, { CSSProperties, ReactElement } from "react";
import Section from "../Section";
import * as styles from "./index.module.scss";

interface Props {
    children: any;
    className?: string;
    style?: CSSProperties;
    bgStyle?: CSSProperties;
    bg?: string;
}

function BannerSection({ children, className, style, bgStyle, bg }: Props) {

    return (<Section className={[bg ? styles.bannerSection : styles.bannerNoBg, className].join(" ")} style={{ color: bg ? 'white' : 'black', ...style}}>
        <div className={styles.bg} style={{ backgroundImage: `url(${bg})`, ...bgStyle }} />
        {children}
    </Section>)
}

export default BannerSection;