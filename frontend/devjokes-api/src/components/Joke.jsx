import {JokeCardStyled} from "../styles/globalStyles.js";


export default function Joke({joke}) {
    if (!joke) {
        return <JokeCardStyled>
            <div className="joke">
                <div className="question">
                    &nbsp;
                </div>
                <div className="punchline">
                    &nbsp;
                </div>
            </div>
            <img className="easeIn" src="/4chan-jokeface.svg"/>
        </JokeCardStyled>
    }

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