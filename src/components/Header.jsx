import React from "react";

export default function Header() {
    return (
        <header className="space-btw-flex">
            <h1>CalculX</h1>
                <ul className="header--menus total-center-flex">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}