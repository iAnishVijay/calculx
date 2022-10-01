import React, { useState } from "react";
import InputField from "./InputField";
import RadioButton from "./RadioButton";
import { calculateGst, truncToTwo } from "../util/calculate";

export default function Main() {
    const [result, setResult] = useState( {
        gstAmount: 0,
        excludingGst: 0
    });
    const [inputs, setInputs] = useState(
        {
            price: 0,
            gstRate: "18"
        }
    );
    const handleChange = (event) => {
        setInputs(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    const gstPercentages = ["5", "12", "18", "28"];
    const gstButtons = gstPercentages.map(item => (
        <RadioButton
            name="gstRate"
            gstRate={item}
            value={item}
            checked={item === inputs.gstRate }
            radioChange={handleChange}
        />
    ));
    React.useEffect(() => {
        var gstExclusivePrice = calculateGst(inputs.price, parseInt(inputs.gstRate));
        setResult((prev) => ({
            ...prev,
            gstAmount: truncToTwo(inputs.price - gstExclusivePrice, 3),
            excludingGst: truncToTwo(gstExclusivePrice, 3)
        }));
    }, [inputs.price, inputs.gstRate]);
    
    return (
        <main className="calculator flex-center">
            <InputField
                name="price"
                labelText="Enter Amount Including GST:"
                handleChange={handleChange}
            />
            <div className="gst-buttons flex-space-btw">
                {gstButtons}
            </div>
            <p className="gst-result">GST Amount: {inputs.gstRate && result.gstAmount}</p>
            <p className="gst-result">Amount excluding GST: {inputs.gstRate && result.excludingGst}</p>
        </main>
    )
}