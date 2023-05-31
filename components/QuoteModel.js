import InputField from "./Input";
import ContactBTN from "./ContactBTN";

const QuoteModel = () => {
    return (
        <>
            <div className="quote-model">
                <div className="closeIcon-wrap">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="white" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"></path></svg>
                </div>
                <div className="heading-wrap">
                    <h1>Let’s start a project together</h1>
                </div>
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
        </>
    )
}

export default QuoteModel