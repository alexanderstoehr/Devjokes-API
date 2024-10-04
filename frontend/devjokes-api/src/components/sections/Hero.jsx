import {HeroStyled} from "../../styles/globalStyles.js";
import JokeButton from "../JokeButton.jsx";
import Joke from "../Joke.jsx";
import jokes from "../../common/dummyJokes.js";
import {useState} from "react";


export default function Hero() {

    const [randomJoke, setRandomJoke] = useState(jokes[0]);
    const newJoke = () => {
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        setRandomJoke(joke)
        console.log(joke)
    }


    return (
        <HeroStyled id="jokes">
            <div className="hero-text">
                <h1>DEVJOKES API</h1>
                <h2>CRUD your Favourite jokes.</h2>
                <JokeButton joke={newJoke}/>
            </div>
            <Joke joke={randomJoke}/>
        </HeroStyled>
    )
}