import tabData from "../../common/tabData.js";
import {TabCodeAreaStyled} from "../../styles/globalStyles.js";
import {baseUrl} from "../../common/api.js";

export default function TabCodeArea() {
    return (
        <TabCodeAreaStyled>
            <div dangerouslySetInnerHTML={{__html: tabData[0].content}}/>
        </TabCodeAreaStyled>
    )
}