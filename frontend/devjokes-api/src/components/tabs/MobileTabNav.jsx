import tabData from "../../common/tabData.js";
import {useState} from "react";
import {MobileTabNavStyled} from "../../styles/globalStyles.js";
import {useNavigate} from "react-router-dom";


export default function MobileTabNav() {
    const mobileNavItems = tabData
    const [currentTab, setCurrentTab] = useState(0)
    const navigate = useNavigate()

    const navigateTabs = (move) => {
        let newTab = currentTab + move
        if (newTab < 0) {
            newTab = mobileNavItems.length - 1
        } else if (newTab >= mobileNavItems.length) {
            newTab = 0
        }
        setCurrentTab(newTab)
        navigate(`/${mobileNavItems[newTab].id}`)
    }

    return (
        <MobileTabNavStyled>
            <img className="grower" onClick={() => navigateTabs(-1)} src="/tab-arrow-left.svg" alt="navigate back"/>
            {mobileNavItems[currentTab].title}
            <img className="grower" onClick={() => navigateTabs(1)} src="/tab-arrow-right.svg" alt="navigate forward"/>
        </MobileTabNavStyled>
    )
}