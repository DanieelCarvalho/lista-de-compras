
import Main from "./Components/Main.js";
import { createGlobalStyle } from "styled-components";
import React, { useState } from "react";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Montserrat:ital,wght@0,100;0,500;0,600;1,100;1,500&family=Mukta:wght@200;400;800&family=Open+Sans:wght@300&family=Roboto+Mono&display=swap');
body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    background:#7d7d7d;
    font-family: 'Roboto Mono', monospace;
    @media screen and (max-width: 1023px){
      background-color: #fcf5a3;
    }
   
}
    `

;

function app (){
  
  return(
    <>
      <GlobalStyle/>
        <Main />
      
      </>

  )
}

export default app;