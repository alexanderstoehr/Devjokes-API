import {TabNavItemStyled} from "../../styles/globalStyles.js";
import {Link} from "react-router-dom";

export default function TabNavItem({item}) {
    return (
        <TabNavItemStyled>
            <Link to={`/${item.id}`}>{item.title}</Link>
        </TabNavItemStyled>
    )
}