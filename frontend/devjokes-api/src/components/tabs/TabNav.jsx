import {TabNavStyled} from "../../styles/globalStyles.js";
import TabNavItem from "./TabNavItem.jsx";
import tabData from "../../common/tabData.js";

export default function TabNav() {
    const navItems = tabData


    return (
        <TabNavStyled>
            <div className=" desktop endpoint-items">{navItems.map((item) => (
                <TabNavItem key={item.id} item={item}/>
            ))}
            </div>
            <a target="_blank"
               href="https://www.postman.com/alstorx/workspace/devjokes-api/folder/23884429-13c08196-b4d8-4869-8743-d04ed42f8fcc"
               className="grower"><img src="/logo-postman.svg" alt="Postman Logo"/></a>
        </TabNavStyled>
    )
}