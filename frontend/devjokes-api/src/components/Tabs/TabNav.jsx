import {TabNavStyled} from "../../styles/globalStyles.js";
import TabNavItem from "./TabNavItem.jsx";

export default function TabNav() {
    return (
        <TabNavStyled>
            <TabNavItem/>
            <a href="https://www.postman.com/alstorx/workspace/devjokes-api/folder/23884429-13c08196-b4d8-4869-8743-d04ed42f8fcc"
               className="grower"><img src="/logo-postman.svg" alt="Postman Logo"/></a>
        </TabNavStyled>
    )
}