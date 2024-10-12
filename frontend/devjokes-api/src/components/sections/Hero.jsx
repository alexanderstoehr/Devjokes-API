import {HeroStyled} from "../../styles/globalStyles.js";
import JokeButton from "../JokeButton.jsx";
import Joke from "../Joke.jsx";
import {useEffect, useState} from "react";
import {api} from "../../common/api.js";


export default function Hero() {
    const [jokes, setJokes] = useState([]);
    const [randomJoke, setRandomJoke] = useState(null);

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                const res = await api.get("/joke/");
                setJokes(res.data);
                setRandomJoke(res.data[0]);
            } catch (error) {
                console.error("Error fetching jokes:", error);
            }
        }
        fetchJokes();

    }, []);


    const setJoke = () => {
        let joke;
        do {
            joke = jokes[Math.floor(Math.random() * jokes.length)];
        } while (joke === randomJoke);
        setRandomJoke(joke);
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