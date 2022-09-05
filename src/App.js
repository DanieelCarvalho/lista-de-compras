
import Main from "./Components/Main.js";
import { createGlobalStyle } from "styled-components";
import React, { useState } from "react";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    background:#7d7d7d;
    font-family: 'times-new-roman';

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