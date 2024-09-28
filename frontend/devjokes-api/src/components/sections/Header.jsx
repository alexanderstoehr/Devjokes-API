import {HeaderStyled} from "../../styles/globalStyles.js";
import {useState} from "react";
import MobileMenuPopup from "../MobileMenuPopup.jsx";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <HeaderStyled>
            <div className="nav-box">
                <a className="grower" href="/"> <img className="logo" src="/logo-as.svg" alt="DevJokes Logo"/></a>
                <nav className="desktopmenu">
                    <ul>
                        <li><a href="#jokes">RANDOM JOKE</a></li>
                        <li><a href="#crud">CRUD A JOKE</a></li>
                        <li><a href="#embed">JOKE IN A PROJECT</a></li>
                    </ul>
                </nav>
            </div>
            <a className="grower github" href="https://github.com/alexanderstoehr/Devjokes-API" target="_blank"><img
                src="/logo-github.svg"/></a>
            <div className="mobilemenu">
                <img onClick={() => toggleMenu()} className="grower" src="/menu.svg" alt="menu"/>
            </div>
            {menuOpen && <MobileMenuPopup toggleMenu={toggleMenu}/>}
        </HeaderStyled>
    )
}