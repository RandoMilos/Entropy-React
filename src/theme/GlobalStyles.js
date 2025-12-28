import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    header{
        flex-shrink: 0;
    }

    body{
        background-color: #040d16;
        font-family: ${props => props.theme.fonts.base};
        font-size: 16px;
        color: #F4F4F4;
        margin: 0;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyles