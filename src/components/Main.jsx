import React, { useState } from "react";
import InputField from "./InputField";
import RadioButton from "./RadioButton";

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
    const gstPercentages = ["12", "18", "28"];
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
        const gstAmount = inputs.price - (inputs.price * (100 / (100 + parseInt(inputs.gstRate))));
        const gstExclusivePrice = inputs.price - gstAmount;
        setResult(gstExclusivePrice);
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
            <h2>Amount excluding GST: {inputs.gstRate && result}</h2>
        </main>
    )
}