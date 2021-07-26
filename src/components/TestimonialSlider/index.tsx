import React from "react";

import * as styles from "./index.module.scss";

function TestimonialSlider() {

    return (<>
        <div className={styles.slider}>
            <input type="radio" name="slider" title="slide1" checked className={styles.sliderNav} />
            <input type="radio" name="slider" title="slide2" className={styles.sliderNav} />
            <input type="radio" name="slider" title="slide3" className={styles.sliderNav} />
            <input type="radio" name="slider" title="slide4" className={styles.sliderNav} />
            <div className={styles.sliderInner}>
                <div className={styles.sliderContents}>
                    <h2 className="slider__caption">codepen</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className={styles.sliderContents}>
                    <h2 className="slider__caption">newspaper-o</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className={styles.sliderContents}>
                    <h2 className="slider__caption">television</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
                <div className={styles.sliderContents}>
                    <h2 className="slider__caption">diamond</h2>
                    <p className="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>
                </div>
            </div>
        </div>
    </>);
}

export default TestimonialSlider;