import styled from "styled-components";


export const MainContentStyled = styled.div`
    @media (max-width: 768px) {
        padding: 0;
        width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    padding: 0 20px;
    gap: 8rem;
`;

export const HeaderStyled = styled.header`
    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .desktopmenu {
            display: none
        }

        .mobilemenu {
            display: flex !important;
            margin-top: -10px;
            cursor: pointer;
            z-index: 100 !important;
        }


    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    margin-bottom: -6rem;

    .mobilemenu {
        display: none;
    }
;

    .nav-box {
        display: flex;
        align-items: flex-start;
        align-items: center;

    }

    img {
        max-height: 50px;


    }

    .github {
        img {
            min-height: 30px;
        }
    }

    nav {
        ul {
            display: flex;
            list-style: none;
            color: var(--color-font-bright);
            font-size: var(--fontsize-nav);
            padding: 0 0 0.2rem 1.5rem;

            li {
                margin: 0 1.5rem;

                a {
                    text-decoration: none;
                }
            }
        }
    }
`;

export const MobileMenuPopupStyled = styled.nav`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--color-dark);
        opacity: 0.9;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        padding: 4rem 0;
        gap: 1rem;
        border-radius: var(--border-radius-big);
        font-size: var(--fontsize-nav);
    }
`

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;


    .section-head {
        padding: 0 0 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .arrow-item {
        @media (max-width: 768px) {
            display: none;
        }
        display: flex;
        align-self: flex-end;
        margin-left: auto;
        margin-right: -200px;
        margin-bottom: -25px;


        img {
            margin: 1rem 0.5rem 0 0;
        }


        .arrow-text {
            display: flex;
            flex-direction: column;;

        }
    }
`
export const HeroStyled = styled.section`
    @media (max-width: 768px) {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;

        .hero-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 1rem !important;
        }

    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 1rem;

    .hero-text {
        padding-bottom: 4rem;
    }

    h1 {
        line-height: 70%;
    }

    h2 {
        margin-bottom: 2rem;
    }

`;

export const JokeCardStyled = styled.div`
    @media (max-width: 768px) {
        width: 80%;
        height: 80%;
        padding: 2rem;
        box-sizing: border-box !important;

        .question {
            font-size: 1.25rem !important;
            line-height: 140% !important;
        }

        .punchline {
            font-size: 1.05rem !important;
            line-height: 140% !important;
            margin-bottom: 4rem;
        }

        img {
            width: 30px !important;
        }
    }

    display: flex;
    justify-self: flex-end;
    flex-direction: column;
    justify-content: space-between;
    width: 420px;
    height: 400px;
    background-image: var(--gradient);
    border-radius: var(--border-radius-big);
    padding: 5rem 3rem 3rem 3rem;
    color: var(--color-font-bright);

    .question {
        font-size: var(--fontsize-cardquestion);
        font-weight: var(--fontweight-card);
        line-height: 34px; /* 121.429% */
        margin-bottom: 1rem;

    }

    .punchline {
        font-size: var(--fontsize-cardpunchline);
        font-weight: var(--fontweight-card);
    }

    img {
        width: 50px;
        justify-self: flex-end;
    }
`;
export const JokeButtonStyled = styled.button`
    display: flex;
    width: 250px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${(props) => `var(${props.color})`};
    color: var(--color-font-bright);
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    border-radius: var(--border-radius-small);
    cursor: pointer;


    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }

`;


export const TabContainerStyled = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;

        .endpoint-items {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            justify-content: center;

        }

        img {
            display: none;
        }
    }

    display: flex;
    gap: 2rem;
    position: relative;

`
export const TabNavStyled = styled.div`
    @media (max-width: 768px) {
        .desktop {
            display: none;
        }
    }
    display: flex;
    position: absolute;
    left: -175px;
    flex-direction: column;
    //justify-content: space-between;
    padding: 1rem 0 2rem 0;
    font-style: italic;
    font-weight: 500;

    img {
        width: 50px;
        margin: 2rem 0 0 -10px;
    }

`

export const TabNavItemStyled = styled.div`
    @media (max-width: 768px) {
        border: 1px solid var(--color-font-bright);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding: 10px;

    }
    color: var(--color-font-bright);
    cursor: pointer;
    padding-bottom: 0.5rem;

    .active {
        color: var(--color-pink);
    }

`

export const MobileTabNavStyled = styled.div`
    @media (min-width: 768px) {
        display: none
    }
    display: flex;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    gap: 2rem;

    img {
        display: block;
        width: 50px;
        cursor: pointer;
    }

`

export const TabContentStyled = styled.div`
    @media (max-width: 768px) {
        justify-content: center;
        min-width: 300px;
        max-width: 80%;
    }

    display: flex;
    flex-direction: column;
    min-width: 775px;
    padding: 1.5rem;
    background-image: var(--dashed-border);
    border-radius: 5px;

    .description {
        font-weight: bold;
    }

    .endpoint {
        font-size: 0.8rem;
        padding: 0 0 1rem 0;
    }
`
export const TabCodeAreaStyled = styled.div`
    display: flex;

    flex-direction: column;
    border-radius: 4px;
    background: #2C2C35;
    padding: 2rem;
    font-family: var(--font-family-code);
    font-size: 0.8rem;
    min-height: 250px;


`


export const EmbedJokeCodeAreaStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-image: var(--dashed-border);
    font-family: var(--font-family-code);
    font-size: 0.8rem;
    min-height: 150px;
    width: 100%;

    .embed-code-area {
        border-radius: 4px;
        background: #2C2C35;
        padding: 1.5rem;
        height: 150px;
    }

`

export const VideoEmbedStyled = styled.div`
    @media (max-width: 768px) {
        iframe {
            width: 350px;
        }

        .arrow-item {
            display: none !important;
        }
    }
    display: flex;
    position: relative;
    //justify-content: center;
    //align-items: center;

    .arrow-item {
        display: flex;
        justify-content: center;
        position: absolute; /* Position the arrow-item absolutely */
        top: 50%; /* Align it to the bottom */
        left: -200px; /* Align it to the right */


        img {
            width: 100px;
            margin: -50px 0 0 0.5rem;
        }

        .arrow-text {
            display: flex;
            flex-direction: column;
            //justify-content: flex-end;

        }

    }

    .video-frame {
    }
`

export const FooterStyled = styled.footer`
    display: flex;
    gap: 0.5rem;
    position: relative;

    .arrow-item {
        @media (max-width: 768px) {
            display: none;
        }
        display: flex;
        position: absolute;
        right: -200px;
        top: -75px;

        img {
            margin: 0 0.5rem 0 0;
            width: 100px;

            .arrow-text {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

            }

        }
`

export const StackBoxStyled = styled.footer`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    height: 70px;
    width: 350px;
    border-radius: var(--border-radius-big);
    background-image: var(--gradient);
    margin-bottom: 2rem;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 0;
        border-radius: var(--border-radius-big);

    }

    img {
        height: 40px;
        z-index: 2;
    }

`;
