import React from "react";
// import Calculate from "../Calculate";

export default function InputField(props) {
    return (
        <>
            <label htmlFor="input-field">Enter Expression</label>
            <input id="input-field" className="input-field" type="tel" placeholder="2 + 3" name="input" onChange={props.handleChange} />
        </>
    )
}