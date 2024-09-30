import tabData from "../../common/tabData.js";
import {useState} from "react";
import {MobileTabNavStyled} from "../../styles/globalStyles.js";


export default function MobileTabNav() {
    const mobileNavItems = tabData
    const [currentTab, setCurrentTab] = useState(0)

    const navigateTabs = (move) => {
        if (currentTab + move < 0) {
            setCurrentTab(mobileNavItems.length - 1)
            return
        }
        if (currentTab + move >= mobileNavItems.length) {
            setCurrentTab(0)
            return
        }
        setCurrentTab(currentTab + move)
    }

    return (
        <MobileTabNavStyled>
            <img className="grower" onClick={() => navigateTabs(-1)} src="/tab-arrow-left.svg" alt="navigate back"/>
            {mobileNavItems[currentTab].title}
            <img className="grower" onClick={() => navigateTabs(1)} src="/tab-arrow-right.svg" alt="navigate forward"/>
        </MobileTabNavStyled>
    )
}