import styled from "styled-components";


export const MainContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    min-height: 100vh;
    padding: 0 20px;
`;

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 0;

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