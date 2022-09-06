import React from "react";

export default function InputField(props) {
    return (
        <>
            <label htmlFor="input-field">{props.labelText}</label>
            <input id="input-field" className="input-field" type="tel" placeholder="0.00" value={props.value} name={props.name} onChange={props.handleChange} />
        </>
    )
}