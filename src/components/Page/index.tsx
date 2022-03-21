import React, { CSSProperties } from "react";
import * as styles from "./index.module.scss";

interface Props {
    children: Array<JSX.Element>
    className?: string;
    style?: CSSProperties;
    genericBackground?: boolean;
}

function Page({ children, className, style, genericBackground }: Props) {

    return (<div className={[styles.page, className].join(" ")} style={{ ...style, backgroundImage: genericBackground ? 'url(/assets/genericBg.svg)' : '' }}>
        {children}
    </div>)
}

export default Page;