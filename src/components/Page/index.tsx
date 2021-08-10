import React, { CSSProperties } from "react";
import * as styles from "./index.module.scss";

interface Props {
    children: Array<JSX.Element>
    className?: string;
    style?: CSSProperties;
    genericBackground?: boolean;
}

function Page({ children, className, style, genericBackground }: Props) {

    return (<div className={[styles.page, className, genericBackground ? styles.bg : ''].join(" ")} style={style}>
        {children}
    </div>)
}

export default Page;