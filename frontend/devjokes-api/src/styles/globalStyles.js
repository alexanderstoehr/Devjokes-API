import styled from "styled-components";


export const MainContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    min-height: 100vh;
    padding: 0 20px;
    gap: 8rem;
`;

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    margin-bottom: -6rem;

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


export const JokeCardStyled = styled.div`
    display: flex;
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

export const HeroStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;

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

`;

export const SectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .section-head {
        padding: 0 0 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const TabContainerStyled = styled.div`
    display: flex;
    gap: 2rem;

`
export const TabNavStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 0 2rem 0;
    font-style: italic;
    font-weight: medium;

    img {
        width: 50px;
    }

`

export const TabNavItemStyled = styled.div`
    color: var(--color-font-bright);
    cursor: pointer;
    padding-bottom: 0.5rem;

    .active {
        color: var(--color-pink);
    }

`

export const TabContentStyled = styled.div`
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


export const StackBoxStyled = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    height: 70px;
    width: 450px;
    border-radius: var(--border-radius-big);
    background-image: var(--gradient);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 1;
        border-radius: var(--border-radius-big);

    }

    img {
        height: 50px;
        z-index: 2;
    }

`;

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