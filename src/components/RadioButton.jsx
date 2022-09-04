import React from "react";

export default function RadioButton(props) {
    return (
        <>
            <input id={props.gstRate} type="radio" value={props.value} name={props.name}onChange={props.radioChange}/>

            <label htmlFor={props.gstRate}>{props.gstRate}%</label>
        </>
    )
}