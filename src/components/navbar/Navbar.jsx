import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = ({ links }) => {
    return (
        <nav className="navbar">
            <Link className="navbar__logo" to="/">
                <div className="ez">EZ</div>
                <div className="english">ENGLISH</div>
            </Link>
            <div className="navbar__links">
                {links && links.length && links.map(link => (
                    <Link
                        key={link.text}
                        className="navbar__link"
                        to={link.url}
                    >
                        <span>{link.text}</span>
                    </Link>
                ))}
            </div>
            <div className="burger-menu">
                <svg width="15px" height="15px" version="1.1" id="Capa_1" xmlns="https://www.w3.org/2000/svg"
                    xmlnsXlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 469.333 469.333"
                    xmlSpace="preserve">
                    <g>
                        <path d="M53.333,106.667H416c29.417,0,53.333-23.927,53.333-53.333S445.417,0,416,0H53.333C23.917,0,0,23.927,0,53.333
				S23.917,106.667,53.333,106.667z" />
                        <path d="M416,181.333H53.333C23.917,181.333,0,205.26,0,234.667S23.917,288,53.333,288H416c29.417,0,53.333-23.927,53.333-53.333
				S445.417,181.333,416,181.333z" />
                        <path d="M416,362.667H53.333C23.917,362.667,0,386.594,0,416s23.917,53.333,53.333,53.333H416
				c29.417,0,53.333-23.927,53.333-53.333S445.417,362.667,416,362.667z" />
                    </g>
                </svg>
            </div>
        </nav>
    )
}

export default Navbar
