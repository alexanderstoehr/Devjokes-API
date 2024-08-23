import {SectionStyled} from "../../styles/globalStyles.js";
import TabContainer from "../tabs/TabContainer.jsx";

export default function EndpointTabs() {
    return (
        <SectionStyled>
            <div className="section-head">
                <div className="arrow-item">
                    <img src="/arrow-ephermal.svg"/>
                    <div className="arrow-text">
                        <div>EPHERMAL STORAGE (HEROKU).</div>
                        <div>GETS A RESET EVERY NOW AND THEN.</div>
                    </div>
                </div>
                <h1>CRUD A JOKE</h1>
                Create, read, update, and delete any joke.
            </div>
            <TabContainer/>
        </SectionStyled>
    )
}