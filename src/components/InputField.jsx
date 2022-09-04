import React from "react";
// import Calculate from "../Calculate";

export default function InputField(props) {
    return (
        <>
            <label htmlFor="input-field">Enter Rate</label>
            <input id="input-field" className="input-field" type="tel" placeholder="Rate" name={props.name} onChange={props.handleChange} />
        </>
    )
}