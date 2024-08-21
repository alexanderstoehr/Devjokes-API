import TabCodeArea from "./TabCodeArea.jsx";
import tabData from "../../common/tabData.js";
import {baseUrl} from "../../common/api.js";
import {TabContentStyled} from "../../styles/globalStyles.js";

export default function TabContent() {
    return (
        <TabContentStyled>
            <div className="description">{tabData[0].description}</div>
            <div className="endpoint">{baseUrl}{tabData[0].endpoint}</div>
            <TabCodeArea/>
        </TabContentStyled>
    )
}