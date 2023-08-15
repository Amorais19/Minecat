import styled, { createGlobalStyle } from "styled-components"
import Fundo from "../../assets/fundo.png"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Merriweather', serif;
    box-sizing: border-box;
  }
`
export const colors = {
  primary: "#3F8A9B",
  black: "#000",
  white: "#fff"
}
