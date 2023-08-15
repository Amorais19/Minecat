import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`

    align-items: center;
    justify-content: center;

    div {
        background-size: 100%;
        height: calc(100vh - 9rem);
    }

    section {
        display: flex;
        justify-content: center;
        padding-top: 3%;
    }

    nav {
        text-align: center;
    }

    a {
        color: ${colors.white};
    }

`