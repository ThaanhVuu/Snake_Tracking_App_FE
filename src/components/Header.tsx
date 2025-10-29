// noinspection HtmlUnknownAnchorTarget

"use client"

import {JSX} from "react";

export function Header() : JSX.Element {
    return (
        <ul id={"menu"} className="nav bg-primary text-white fixed-top d-flex align-items-center px-3">
            {/*<li className="nav-item me-4">*/}
            {/*    <a*/}
            {/*        href="#home"*/}
            {/*        className="nav-link text-white fw-bold fs-4"*/}
            {/*        style={{ letterSpacing: "1px" }}*/}
            {/*    >*/}
            {/*        HsK*/}
            {/*    </a>*/}
            {/*</li>*/}

            <li className="nav-item">
                <a className="nav-link fw-semibold" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold" href="#tracking">Tracking</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold" href="#library">Library</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fw-semibold" href={'#aboutus'}>About us</a>
            </li>
        </ul>
    );
}