import React from "react";

export default function Header() {
    return (
        <header>
            <h1>CalculX</h1>
                <ul className="header--menus flex-dead-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}