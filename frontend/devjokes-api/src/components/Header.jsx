import {HeaderStyled} from "../styles/globalStyles.js";

export default function Header() {
    return (
        <HeaderStyled>
            <div className="nav-box">
                <a className="grower" href="/"> <img src="/logo-as.svg" alt="DevJokes Logo"/></a>
                <nav>
                    <ul>
                        <li><a href="/#jokes">RANDOM JOKE</a></li>
                        <li><a href="/#memes">CRUD A JOKE</a></li>
                        <li><a href="/#videos">MAKE YOUR PROJECT A JOKE</a></li>
                    </ul>
                </nav>
            </div>
            <a className="grower github" href="https://github.com/alexanderstoehr/Devjokes-API" target="_blank"><img
                src="/logo-github.svg"/></a>
        </HeaderStyled>
    )
}