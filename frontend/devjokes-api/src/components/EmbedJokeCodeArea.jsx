import {EmbedJokeCodeAreaStyled, TabCodeAreaStyled} from "../styles/globalStyles.js";

export default function EmbedJokeCodeArea() {
    const embedContent = `Coming soon.`

    return (
        <EmbedJokeCodeAreaStyled>
            <div className="embed-code-area">
                {embedContent}
            </div>
        </EmbedJokeCodeAreaStyled>
    )
}