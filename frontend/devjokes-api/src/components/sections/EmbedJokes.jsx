import {SectionStyled} from "../../styles/globalStyles.js";
import EmbedJokeCodeArea from "../EmbedJokeCodeArea.jsx";

export default function EmbedJokes() {
    return (
        <SectionStyled>
            <div className="section-head">
                <h1>Make your project a joke</h1>
                Embed a joke in your project
            </div>

            <EmbedJokeCodeArea/>

        </SectionStyled>
    )
}