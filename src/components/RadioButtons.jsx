import React from "react";

export default function RadioButtons() {
    return (
        <div className="gst-buttons flex-dead-center">
            <input id="18%" type="radio" />
            <label htmlFor="18%">18%</label>
            <input id="28%" type="radio" />
            <label htmlFor="28%">28%</label>
            <input id="32%" type="radio" />
            <label htmlFor="32%">32%</label>
        </div>
    )
}