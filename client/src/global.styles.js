import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
    background-color:${(props) => props.theme.body};
    color:${(props) => props.theme.fontColor};
    border:${(props) => props.theme.fontColor};
    

    @media screen and (max-width:800px){
        padding:10px;
    }
}
a{
    text-decoration: none;
    color:${(props) => props.theme.fontColor};
}

`;


export const lightTheme={
    body:'#fff',
    fontColor:"#000",
}
export const darkTheme = {
  body: "#464646",
  fontColor: "#F05454",
};