import {HeaderStyled} from "../../styles/globalStyles.js";

export default function Header() {
    return (
        <HeaderStyled>
            <div className="nav-box">
                <a className="grower" href="/devjokes-api/public"> <img src="/logo-as.svg" alt="DevJokes Logo"/></a>
                <nav>
                    <ul>
                        <li><a href="/devjokes-api/public#jokes">RANDOM JOKE</a></li>
                        <li><a href="/devjokes-api/public#memes">CRUD A JOKE</a></li>
                        <li><a href="/devjokes-api/public#videos">JOKE IN A PROJECT</a></li>
                    </ul>
                </nav>
            </div>
            <a className="grower github" href="https://github.com/alexanderstoehr/Devjokes-API" target="_blank"><img
                src="/logo-github.svg"/></a>
        </HeaderStyled>
    )
}