import tabData from "../../common/tabData.js";
import TabNav from "./TabNav.jsx";
import TabContent from "./TabContent.jsx";
import {TabContainerStyled} from "../../styles/globalStyles.js";
import {Outlet, useParams} from "react-router-dom";
import MobileTabNav from "./MobileTabNav.jsx";

export default function TabContainer() {
    const {id} = useParams()
    const defaultTab = tabData[0].id
    const activeTab = id || defaultTab

    const viewPortwidth = window.innerWidth


    return (
        <TabContainerStyled>
            <TabNav/>
            {viewPortwidth < 768 && <MobileTabNav/>}
            <TabContent tabID={activeTab}/>
        </TabContainerStyled>
    )
}