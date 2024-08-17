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
