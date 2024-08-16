import {JokeCardStyled} from "../styles/globalStyles.js";

export default function Joke({jokes}) {
    // let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    // console.log(randomJoke)

    return (
        <JokeCardStyled>
            <div className="joke">
                <div className="question">Why did the nosql dev leave the bar early?</div>
                <div className="punchline">Because he did not find a table.</div>
            </div>
            <img src="/4chan-jokeface.svg"/>
        </JokeCardStyled>
    );
}