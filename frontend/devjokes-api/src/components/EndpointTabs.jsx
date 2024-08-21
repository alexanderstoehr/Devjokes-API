import {SectionStyled} from "../styles/globalStyles.js";
import TabContainer from "./Tabs/TabContainer.jsx";

export default function EndpointTabs() {
    return (
        <SectionStyled>
            <div className="section-head">
                <h1>CRUD A JOKE</h1>
                Create, read, update, and delete any joke.
            </div>
            <TabContainer/>
        </SectionStyled>
    )
}