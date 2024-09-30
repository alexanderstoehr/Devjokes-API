import {TabNavItemStyled} from "../../styles/globalStyles.js";
import {NavLink} from "react-router-dom";

export default function TabNavItem({item}) {
    return (
        <TabNavItemStyled>
            <NavLink to={`/${item.id}`}>{item.title}</NavLink>
        </TabNavItemStyled>
    )
}