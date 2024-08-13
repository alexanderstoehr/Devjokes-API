import {JokeCardStyled} from "../styles/globalStyles.js";

export default function Joke({jokes}) {
    // let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    // console.log(randomJoke)

    return (
        <JokeCardStyled>
            <div className="question">Here's a joke</div>
            <div className="punchline">And a punchline</div>
            <img src="/4chan-jokeface.svg"/>
        </JokeCardStyled>
    );
}