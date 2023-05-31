import Image from "next/image";
const ClientLogo = ({ imageURL }) => {
    return (
        <>
            <div className="box">
                <Image src={imageURL} alt="clientImage" width={192} height={42} className="clientLogoImg" />
            </div>
        </>
    )
}

export default ClientLogo;