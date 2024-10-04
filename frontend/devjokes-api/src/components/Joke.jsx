import {JokeCardStyled} from "../styles/globalStyles.js";


export default function Joke({joke}) {


    return (
        <JokeCardStyled>
            <div className="joke">
                <div className="question">
                    {joke.question ? joke.question : joke.punchline}
                </div>
                <div className="punchline">
                    {joke.question ? joke.punchline : null}
                </div>
            </div>
            <img src="/4chan-jokeface.svg"/>
        </JokeCardStyled>
    );
}