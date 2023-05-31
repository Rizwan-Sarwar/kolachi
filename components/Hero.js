import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image"

const Hero = () => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
            loop: true,
        },
        [
            // add plugins here
        ]
    )
    return (
        <>
            <div className="hero-section rs-carousel slide">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide">
                        <div className="slide">
                            <div className="cantainer">
                                <div className="image-wrapper">
                                    <Image src='/31.webp' alt="slide-image" width={550} height={420} />
                                </div>
                                <div className="text-wrapper">
                                    <h1>Geeks of <span>Kolachi</span></h1>
                                    <p>Improving lives through technology</p>
                                    <a href="#">BUILD YOUR TEAM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide">
                        <div className="slide">
                            <div className="cantainer">
                                <div className="image-wrapper">
                                    <Image src='/32.webp' alt="slide-image" width={550} height={420} />
                                </div>
                                <div className="text-wrapper">
                                    <h1>Geeks of <span>Kolachi</span></h1>
                                    <p>Improving lives through technology</p>
                                    <a href="#">BUILD YOUR TEAM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="keen-slider__slide">
                        <div className="slide">
                            <div className="cantainer">
                                <div className="image-wrapper">
                                    <Image src='/33.webp' alt="slide-image" width={550} height={420} />
                                </div>
                                <div className="text-wrapper">
                                    <h1>Geeks of <span>Kolachi</span></h1>
                                    <p>Improving lives through technology</p>
                                    <a href="#">BUILD YOUR TEAM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;