import {MobileMenuPopupStyled} from "../styles/globalStyles.js";

export default function MobileMenuPopup({toggleMenu}) {
    return (
        <MobileMenuPopupStyled>

            <a onClick={() => toggleMenu()} href="#jokes">RANDOM JOKE</a>
            <a onClick={() => toggleMenu()} href="#crud">CRUD A JOKE</a>
            <a onClick={() => toggleMenu()} href="#embed">JOKE IN A PROJECT</a>

        </MobileMenuPopupStyled>
    )
}