import React, { CSSProperties } from "react";
import * as styles from "./index.module.scss";

interface Props {
    children: any;
    className?: string;
    style?: CSSProperties
}

function Text({ children, className, style }: Props) {

    return (<div className={[styles.text, className].join(" ")} style={style}>
        {children}
    </div>)
}

export default Text;