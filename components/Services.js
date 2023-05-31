import Image from "next/image";
import ServiceTechnology from "./ServiceTechnology";
const Services = () => {
    return (
        <>
            <div className="service-section">
                <div className="cantainer">
                    <div className="heading-sec-1">
                        <h3>services</h3>
                        <h2>Giving wings to your ideas is our forte</h2>
                        <p>Providing modern and futuristic virtual platforms to boost the businesses in form of Web Apps, Mobile Apps, Cloud Services, and Blockchain Services is legacy of Geeks of Kolachi</p>
                    </div>
                    <div className="grid-2 service-grid">
                        <div className="box">
                            <div className="heading-sec-2">
                                <h1>Resource Augmentation</h1>
                                <p>We have a pool of expert resources with practical experience in creating, fixing and delivering outstanding projects</p>
                                <a href="#"><span>build your team </span> <span><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span></a>
                            </div>
                            <div className="grid-4 service-technology">
                                <ServiceTechnology imageURL="/30.webp" serviceName="React" />
                                <ServiceTechnology imageURL="/26.webp" serviceName="NextJS" />
                                <ServiceTechnology imageURL="/29.webp" serviceName="Python" />
                                <ServiceTechnology imageURL="/28.webp" serviceName="Node.js" />
                                <ServiceTechnology imageURL="/13.webp" serviceName="DevOps" />
                                <ServiceTechnology imageURL="/30.webp" serviceName="React Native" />
                                <ServiceTechnology imageURL="/17.webp" serviceName="Flutter" />
                                <ServiceTechnology imageURL="/25.webp" serviceName="Many More" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-wrap">
                                <Image src="/37.webp" width={445} height={700} className="serviceMainImage-1" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-section rtl-service-section bg-light">
                <div className="cantainer">
                    <div className="heading-sec-1">
                        <h3>services</h3>
                    </div>
                    <div className="grid-2 service-grid">
                        <div className="box">
                            <div className="heading-sec-2">
                                <h1>Software Development</h1>
                                <p>Sustain your business with our expertise in modern Software Development</p>
                                <a href="#"><span>learn more </span> <span><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span></a>
                            </div>
                            <div className="grid-4 service-technology">
                                <ServiceTechnology imageURL="/18.webp" serviceName="Health" />
                                <ServiceTechnology imageURL="/34.webp" serviceName="Sports" />
                                <ServiceTechnology imageURL="/14.webp" serviceName="Education" />
                                <ServiceTechnology imageURL="/16.webp" serviceName="Fintech" />
                                <ServiceTechnology imageURL="/20.webp" serviceName="Lifestyle" />
                                <ServiceTechnology imageURL="/30.webp" serviceName="Many More" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-wrap">
                                <Image src="/24.webp" width={445} height={700} className="serviceMainImage-2" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-section rtl-service-section service-3">
                <div className="cantainer">
                    <div className="heading-sec-1">
                        <h3>services</h3>
                    </div>
                    <div className="grid-2 service-grid">
                        <div className="box">
                            <div className="heading-sec-2">
                                <h1>Blockchain</h1>
                                <p>Our Blockchain Services can make your dream projects reach the new heights smoothly</p>
                                <a href="#"><span>learn more </span> <span><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span></a>
                            </div>
                            <div className="grid-4 service-technology">
                                <ServiceTechnology imageURL="/27.webp" serviceName="NFT" />
                                <ServiceTechnology imageURL="/36.webp" serviceName="Web 3.0" />
                                <ServiceTechnology imageURL="/15.webp" serviceName="Ethereum" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="image-wrap">
                                <Image src="/9.webp" width={445} height={700} className="serviceMainImage-3" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;