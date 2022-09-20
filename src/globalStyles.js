import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `
*{
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: 'Source Sans Pro', sans-serif;

}

`;

export const Container = styled.div `
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-left: 50px;
padding-right: 50px;

@media screen and (max-width: 960px){
padding-left: 30px;
padding-right: 30px;
}
`;

export const Button = styled.button `
border-radius: 5px;
background : ${({primary}) => (primary? '#4b59F7' : '#0467FB') };
white-space: nowrap;
padding: ${({big}) => (big? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: 0px;
border: 0px;
cursor: pointer;


&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#0467FB' : '#4b59F7') };
}

@media screen and (max-width: 960px){
    width: 100%;
}
`;



export default GlobalStyle;