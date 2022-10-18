/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react"
import './header.css';
import {FaHome} from "react-icons/fa"
import {RiSearch2Line} from "react-icons/ri"
import IMG_LOGO from "../../assets/css-logo.png"

const lan_data = [
    {
        name: "English",
        id: 1
    },
    {
        name: "Arabic",
        id: 2
    }
]

const Header = () => {
    
    return (
        <div id="header">
            <div className="header__container">
                <nav className="css__nav">
                    <img src={IMG_LOGO} alt="css logo" className="css-logo-img"/>
                    <form action="" className="nav__search">
                        <label htmlFor=""><RiSearch2Line /></label>
                        <input type="search" />
                    </form>
                    <div className="nav__links">
                        <ul >
                            <li className="nav__item"><a href="#contact">Contact</a></li>
                            <li className="nav__item"><a href="#contact">Contact</a></li>
                            <li className="nav__item"><a href="#contact">Contact</a></li>
                            <li className="nav__item"><a href="#contact">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="home__logo">
                        <a href="https://zu.ac.ae" target="_blank"><FaHome /></a>
                    </div>
                    <div className="dropdown">
                        <select name="dropdown_item" id="dropdown_items">
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                        </select>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header