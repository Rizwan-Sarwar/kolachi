import Benefit from "./Benefit";
import ContactBTN from "./ContactBTN";
import InputField from "./Input";

const ContactUs = () => {
    return (
        <>
            <div className="contact-section">
                <div className="cantainer">
                    <div className="heading-sec-1">
                        <h3>Contact us</h3>
                    </div>
                    <div className="grid-2 contact-detail">
                        <div className="box">
                            <h1>Let's discuss how we can mutually benefit each other!</h1>
                            <div className="md-grid-2">
                                <Benefit imageURL="/10.webp" boldText="05+" text="Years of Experience" />
                                <Benefit imageURL="/35.webp" boldText="50+" text="In-House Talent" />
                                <Benefit imageURL="/11.webp" boldText="10+" text="Industries Catered" />
                                <Benefit imageURL="/21.webp" boldText="99%" text="Happy Clients" />
                            </div>
                        </div>
                        <div className="box">
                            <div className="md-grid-2">
                                <InputField inputType="text" inputPlaceHolder="Name*" inputValue="" />
                                <InputField inputType="text" inputPlaceHolder="EmailAddress*" inputValue="" />
                                <InputField inputType="text" inputPlaceHolder="PhoneNumber*" inputValue="" />
                                <InputField inputType="text" inputPlaceHolder="Skype ID*" inputValue="" />
                                <InputField inputType="dropdown" inputPlaceHolder="Interested In*" inputValue="" />
                                <InputField inputType="textarea" inputPlaceHolder="Message*" inputValue="" />
                                <ContactBTN />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;