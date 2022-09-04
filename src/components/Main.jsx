import React, { useState } from "react";
import InputField from "./InputField";
import RadioButton from "./RadioButton";

export default function Main() {
    const [input, setInput] = useState();
    const handleChange = (event) => {
        setInput(event.target.value);
        calculateGst();
    }
    const [gstRate, setgstRate] = useState("");
    const handleRadioClick = (event) => {
        setgstRate((event.target.value).toString());
    }
    const [result, setResult] = useState();
    const calculateGst = () => {
        setResult(input * parseInt(gstRate) * 0.01);
    }
    console.log(`gst rate set to ${gstRate}`);
    console.log(`result is now ${result}`);
    return (
        <main className="calculator">
            <InputField
                handleChange={handleChange}
            />
            <h2>{result}</h2>
            <div className="gst-buttons total-center-flex">
                <RadioButton
                    gstRate={12}
                    value="12"
                    checked={gstRate === 12}
                    radioChange={handleRadioClick}
                />
                <RadioButton
                    gstRate={18}
                    value="18"
                    checked={gstRate === 18}
                    radioChange={handleRadioClick}
                />
                <RadioButton
                    gstRate={28}
                    value="28"
                    checked={gstRate === 28}
                    radioChange={handleRadioClick}
                />
            </div>
        </main>
    )
}