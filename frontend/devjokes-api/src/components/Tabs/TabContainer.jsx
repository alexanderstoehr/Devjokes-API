import tabData from "../../common/tabData.js";
import TabNav from "./TabNav.jsx";
import TabContent from "./TabContent.jsx";
import {TabContainerStyled} from "../../styles/globalStyles.js";
import {Outlet, useParams} from "react-router-dom";

export default function TabContainer() {
    const {id} = useParams()
    const defaultTab = tabData[0].id
    const activeTab = id || defaultTab


    return (
        <TabContainerStyled>
            <TabNav/>
            <TabContent tabID={activeTab}/>
        </TabContainerStyled>
    )
}