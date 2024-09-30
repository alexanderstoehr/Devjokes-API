import tabData from "../../common/tabData.js";
import {useEffect, useState} from "react";
import {MobileTabNavStyled} from "../../styles/globalStyles.js";
import {useNavigate, useParams} from "react-router-dom";


export default function MobileTabNav() {
    const mobileNavItems = tabData
    const navigate = useNavigate()
    const {id} = useParams() //

    const initialTab = mobileNavItems.findIndex(tab => tab.id === id); // -1 if not found
    const [currentTab, setCurrentTab] = useState(initialTab !== -1 ? initialTab : 0); // default to 0 if not found

    useEffect(() => {
        if (initialTab !== -1) {
            setCurrentTab(initialTab);
        }
    }, [id, initialTab]); // update currentTab if id changes

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