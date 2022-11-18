import React, {useState} from "react";
import HeroSlider, {Nav, Overlay, Slide} from "hero-slider";

import slide1 from "@Assets/hero/slide-1.png";
import slide2 from "@Assets/hero/slide-2.png";
import slide3 from "@Assets/hero/slide-3.png";

import * as s from "./Home.style";

const Home = (props) => {
    const slideContent = [
        "Welcome to GOPHER INDUSTRIES", "Building Healthier Communities", "Using Enabling Technologies"
    ];
    const [activeSlideContent, setActiveSlideContent] = useState(slideContent[0]);


    return (
        <div className="Home-Container">
            <HeroSlider
                height={"calc(100vh - 114px)"}
                width={"100%"}
                autoplay
                animations={{
                    slidingAnimation:'fade'
                }}
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) => setActiveSlideContent(slideContent[nextSlide-1]),
                }}
            >
                <Overlay>
                    <s.SlideContent>
                        <s.SlideHeader>{activeSlideContent}</s.SlideHeader>
                    </s.SlideContent>
                </Overlay>
                <Slide background={{ backgroundImageSrc: slide1, backgroundImageSizes:'cover', backgroundImageBlendMode:'overlay' }} />
                <Slide background={{ backgroundImageSrc: slide2, backgroundImageSizes:'contain' }} />
                <Slide background={{ backgroundImageSrc: slide3 }} />
                <Nav />
            </HeroSlider>
        </div>
    );
};

export default Home;
