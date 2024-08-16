import {HeroStyled} from "../styles/globalStyles.js";
import JokeButton from "./JokeButton.jsx";
import Joke from "./Joke.jsx";

export default function Hero() {
    return (
        <HeroStyled>
            <div className="hero-text">
                <h1>DEVJOKES API</h1>
                <h2>CRUD your Favourite jokes.</h2>
                <JokeButton/>
            </div>
            <Joke/>
        </HeroStyled>
    )
}