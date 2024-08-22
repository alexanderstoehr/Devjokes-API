import {TabNavItemStyled} from "../../styles/globalStyles.js";

export default function TabNavItem({item}) {
    return (
        <TabNavItemStyled>
            <a>{item.title}</a>
        </TabNavItemStyled>
    )
}