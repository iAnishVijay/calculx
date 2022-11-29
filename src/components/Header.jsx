import React from "react";
import hamburgerIcon from '../images/hamburger-icon.svg';

export default function Header() {
    return (
        <header className="header flex-space-btw">
            <h1 className="header--heading">CalculX</h1>
            <ul className="header--menus flex-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <img className="hamburgerIcon" src={hamburgerIcon} alt="hamburger" />
        </header>
    )
}