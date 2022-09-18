import React from "react";

export default function Header() {
    return (
        <header className="header flex-space-btw">
            <h1>CalculX</h1>
                <ul className="header--menus flex-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}