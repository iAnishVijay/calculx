import React, { useState } from "react";
import InputField from "./InputField";
import RadioButton from "./RadioButton";

export default function Main() {
    const [result, setResult] = useState();
    const [inputs, setInputs] = useState(
        {
            textInput: 0,
            gstRate: ""
        }
    );
    const handleChange = (event) => {
        setInputs(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    React.useEffect(() => {
        setResult(inputs.textInput * parseInt(inputs.gstRate) * 0.01);
    }, [inputs.textInput, inputs.gstRate]);
    return (
        <main className="calculator">
            <InputField
                name="textInput"
                handleChange={handleChange}
            />
            <h2>{inputs.gstRate && result}</h2>
            <div className="gst-buttons total-center-flex">
                <RadioButton
                    name="gstRate"
                    gstRate="12"
                    value="12"
                    checked={inputs.gstRate === "12"}
                    radioChange={handleChange}
                />
                <RadioButton
                name="gstRate"
                    gstRate="18"
                    value="18"
                    checked={inputs.gstRate === "18"}
                    radioChange={handleChange}
                />
                <RadioButton
                name="gstRate"
                    gstRate="28"
                    value="28"
                    checked={inputs.gstRate === "28"}
                    radioChange={handleChange}
                />
            </div>
        </main>
    )
}