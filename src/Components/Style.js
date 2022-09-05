import styled from 'styled-components';

export const Titulo = styled.h1` 
  width: 100%;
  height:4vh;
  color: #00195e;
  display:flex;
  justify-content:center;
  font-size: 3vw;

`
export const Principal = styled.section`
  display:flex;
  height: 90vh;
  width:100%;
  justify-content:  center;
  color: #384b9a;
 

`
;
export const Caderno = styled.div`
  background-color: #fcf5a3;
  width: 36vw;
  height: 99vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  border: solid black; 
}

button{
    border-radius: 1vh;
    color:white;
    background:teal;
    border:none;
    width:6vw;
    height:3.5vh;
    cursor:pointer;
}

`

export const Form = styled.form`
    width: 33vw;
    height: 10vh;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    border-bottom: solid 1px #45c4d9;
    
`
export const Quant = styled.input`
    width: 10vw;
    height: 3vh;
    border-radius: 1vh;
    border:none;
    font-size:1vw;
}
    
    &::placeholder{
      
        
    }
  
`
;
export const Produto = styled.input`
    width: 10vw;
    height: 3vh;
    border-radius: 1vh;
    border:none;
    padding: 2px;
    font-size:1vw;
}
    
&::placeholder{
   
    
    
}
`
;
export const Result = styled.div`
  display:flex;
  width:33vw;
  height: 5vh;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #45c4d9;
  font-size: 1.5vw
 

}
p{
    width: 2vw;
    height: 4vh;
    display:flex;
    justify-content: center;
    align-items: center;


}
 label{
    width:23vw;
    display:flex;
    justify-content: space-between;
    
}
input:checked + label {
  text-decoration: line-through red;
}
button{
    width:6vw;
    height:3.5vh
}
`

;
export const Label = styled.div`
  display: flex;
  flex-direction: row-reverse;

`



