import {HeroStyled} from "../../styles/globalStyles.js";
import JokeButton from "../JokeButton.jsx";
import Joke from "../Joke.jsx";
import jokes from "../../common/dummyJokes.js";
import {useState} from "react";


export default function Hero() {

    const [randomJoke, setRandomJoke] = useState(jokes[0]);
    const newJoke = () => {
        //generate joke
        let joke = jokes[Math.floor(Math.random() * jokes.length)];
        //check if joke is not already in joke, else generate another joke
        while (joke === randomJoke) {
            joke = jokes[Math.floor(Math.random() * jokes.length)];
        }
        return joke
    }

    const setJoke = () => {
        setRandomJoke(newJoke())
    }


    return (
        <HeroStyled id="jokes">
            <div className="hero-text">
                <h1>DEVJOKES API</h1>
                <h2>CRUD your Favourite jokes.</h2>
                <JokeButton joke={setJoke}/>
            </div>
            <Joke joke={randomJoke}/>
        </HeroStyled>
    )
}