import React from "react";
import { useState } from "react";
import Calculate from "../Calculate";

export default function InputField() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);
    const handleChange = (event) => {
        setInput(event.target.value);
        sendToCalculate();
    }
    const sendToCalculate = () => {
        setResult(Calculate.calculateGst(input));
    }
    return (
        <>
            <label htmlFor="input-field">Enter Expression</label>
            <input id="input-field" className="input-field" type="number" placeholder="2 + 3" name="input" onChange={handleChange} />
            <h2>{result}</h2>
        </>
    )
}