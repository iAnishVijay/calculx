import React from "react";

export default function RadioButton(props) {
    return (
        <>
            <input id={props.gstRate} type="radio" value={props.value} onChange={props.radioChange}/>

            <label htmlFor={`${props.gstRate}`}>{`${props.gstRate}%`}</label>
        </>
    )
}