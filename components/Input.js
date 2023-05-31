const InputField = ({ inputType, inputPlaceHolder, inputValue }) => {
    return (
        <>
            {
                inputType === 'text' ?
                    (
                        <div className="box">
                            <div className="field-wrap">
                                <input placeholder={inputPlaceHolder} />
                            </div>
                        </div>
                    )
                    :
                    (
                        inputType === 'dropdown' ?
                            (
                                <div className="box">
                                    <div className="field-wrap">
                                        <select placeholder={inputPlaceHolder}>
                                            <option>Interested In*</option>
                                            <option>Software Development</option>
                                            <option>Team Extension</option>
                                            <option>DeveOps</option>
                                            <option>Application Development</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="box">
                                    <div className="field-wrap">
                                        <textarea placeholder={inputPlaceHolder} />
                                    </div>
                                </div>
                            )
                    )
            }
        </>
    )
}

export default InputField;