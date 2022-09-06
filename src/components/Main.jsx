import React, { useState } from "react";
import InputField from "./InputField";
import RadioButton from "./RadioButton";
import { calculateGst, truncToTwo } from "../util/Calculate";

export default function Main() {
    const [result, setResult] = useState();
    const [inputs, setInputs] = useState(
        {
            price: 0,
            gstRate: ""
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
            checked={inputs.gstRate === item}
            radioChange={handleChange}
        />
    ));
    React.useEffect(() => {
        var gstExclusivePrice = calculateGst(inputs.price, parseInt(inputs.gstRate));
        setResult(truncToTwo(gstExclusivePrice, 2));
    }, [inputs.price, inputs.gstRate]);
    return (
        <main className="calculator">
            <InputField
                name="price"
                labelText="Amount Including GST"
                handleChange={handleChange}
            />
            <div className="gst-buttons total-center-flex">
                {gstButtons}
            </div>
            <h3>Amount excluding GST: {inputs.gstRate && result}</h3>
        </main>
    )
}