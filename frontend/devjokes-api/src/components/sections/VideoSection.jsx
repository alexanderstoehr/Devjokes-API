import EmbedJokeCodeArea from "../EmbedJokeCodeArea.jsx";
import {SectionStyled} from "../../styles/globalStyles.js";

export default function VideoSection() {
    return (
        <SectionStyled>
            <div className="section-head">
                <h1>Seriously</h1>
                Imagine this track autoplayed here
            </div>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mbbyiqbcBx0?si=iuSlP_2-yu7VnhDY&amp;start=223"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SectionStyled>

    )
}