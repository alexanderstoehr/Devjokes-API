import {FooterStyled, StackBoxStyled} from "../../styles/globalStyles.js";

export default function Footer() {
    return (
        <FooterStyled>
            <StackBoxStyled>
                <img src="/logo-reactjs.svg"/>
                <img src="/logo-djangoproject.svg"/>
                <img src="/logo-sqlite.svg"/>
            </StackBoxStyled>
            <div className="arrow-item">
                <img src="/arrow-stack.svg"/>
                <div className="arrow-text">
                    <div>STACK</div>
                    <div>STACK</div>
                    <div>STACK</div>
                </div>
            </div>
        </FooterStyled>
    )
}