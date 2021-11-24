import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
   
    
}
body{
    width: 100%;
    background:#ffff;
    overflow-x: hidden;
    font-family: 'Barlow Condensed', sans-serif;
}
.App{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    
    

}


`;
