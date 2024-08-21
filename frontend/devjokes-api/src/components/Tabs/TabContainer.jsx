import tabData from "../../common/tabData.js";
import TabNav from "./TabNav.jsx";
import TabContent from "./TabContent.jsx";
import {TabContainerStyled} from "../../styles/globalStyles.js";

export default function TabContainer() {
    return (
        <TabContainerStyled>
            <TabNav/>
            <TabContent/>
        </TabContainerStyled>
    )
}