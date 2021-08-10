import React, { CSSProperties } from "react";
import * as styles from "./index.module.scss";

interface Props {
    children: Array<JSX.Element>
    className?: string;
    style?: CSSProperties
}

function Section({ children, className, style }: Props) {

    return (<div className={[styles.section, className].join(" ")} style={style}>
        {children}
    </div>)
}

export default Section;