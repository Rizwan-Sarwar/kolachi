import ClientLogo from "./ClientLogo";

const Client = () => {
    return (
        <>
            <div className="client-section">
                <div className="cantainer">
                    <div className="heading-sec-1">
                        <h3>OUR CLIENTS</h3>
                        <h2>Let's take a look at our legacy of delivering brilliance</h2>
                    </div>
                    <div className="grid-4 client-wrap">
                        <ClientLogo imageURL="/1.webp" />
                        <ClientLogo imageURL="/3.webp" />
                        <ClientLogo imageURL="/4.webp" />
                        <ClientLogo imageURL="/5.webp" />
                        <ClientLogo imageURL="/6.webp" />
                        <ClientLogo imageURL="/7.webp" />
                        <ClientLogo imageURL="/8.webp" />
                        <ClientLogo imageURL="/19.webp" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client; 