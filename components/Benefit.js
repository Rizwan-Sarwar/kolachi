import Image from "next/image";
const Benefit = ({ imageURL, boldText, text }) => {
    return (
        <>
            <div className="box">
                <div className="iconWrap">
                    <Image src={imageURL} alt="icon" width={49} height={96} />
                </div>
                <div className="textWrap">
                    <h3><span>{boldText}</span>{text}</h3>
                </div>
            </div>
        </>
    )
}

export default Benefit;