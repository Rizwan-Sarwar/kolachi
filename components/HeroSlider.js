import Image from "next/image"
const HeroSlider = () => {
    setTimeout(() => {
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            items: 1
        })
    }, .1);
    return (
        <>
            <div className="hero-section rs-carousel slide owl-carousel">
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
        </>
    )
}


export default HeroSlider;