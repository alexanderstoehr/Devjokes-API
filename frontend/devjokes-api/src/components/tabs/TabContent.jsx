import TabCodeArea from "./TabCodeArea.jsx";
import tabData from "../../common/tabData.js";
import {baseUrl} from "../../common/api.js";
import {TabContentStyled} from "../../styles/globalStyles.js";

export default function TabContent({tabID}) {
    const tab = tabData.find(tab => tab.id === tabID)
    /*console.log(tab.id)*/

    return (
        <TabContentStyled>
            <div className="description">{tab.description}</div>
            <div className="endpoint">{baseUrl}{tab.endpoint}</div>
            <TabCodeArea tab={tab}/>
        </TabContentStyled>
    )
}