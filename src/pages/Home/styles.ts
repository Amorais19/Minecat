import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`
    padding: 0.5rem;
    align-items: center;
    img {
        display: flex;
        width: 100%;
    }
    h2 {
        color: ${colors.black}
    }
`