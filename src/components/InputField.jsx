import React from "react";

export default function InputField() {
    return (
        <>
            <label htmlFor="input-field">Enter Expression</label>
            <input id="input-field" className="input-field" type="text" placeholder="2+3" name="input"/>
            <h2>result</h2>
        </>
    )
}