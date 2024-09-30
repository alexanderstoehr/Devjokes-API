import tabData from "../../common/tabData.js";
import {useState} from "react";
import {MobileTabNavStyled} from "../../styles/globalStyles.js";


export default function MobileTabNav() {
    const mobileNavItems = tabData
    const [currentTab, setCurrentTab] = useState(0)

    const navigateTabs = (id) => {
        console.log(id)
    }

    return (
        <MobileTabNavStyled>
            <img src="/tab-arrow-left.svg" alt="navigate back"/>
            {mobileNavItems[currentTab].title}
            <img src="/tab-arrow-right.svg" alt="navigate forward"/>
        </MobileTabNavStyled>
    )
}