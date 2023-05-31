import Image from "next/image";
const ServiceTechnology = ({ imageURL, serviceName }) => {
    return (
        <>
            <div className="box">
                <div className="service-image">
                    <Image src={imageURL} width={78} height={78} alt="Image" />
                </div>
                <div className="service-name">
                    <span>{serviceName}</span>
                </div>
            </div>
        </>
    )
}

export default ServiceTechnology;