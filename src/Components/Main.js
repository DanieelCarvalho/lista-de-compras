import React, { useState } from "react";
import { Titulo, Principal, Caderno, Result, Quant, Produto, Form, Label } from "./Style";

function Main() {


  const [tarefas, setTarefas] = useState("");
  const [listaDeTarefas, setLista] = useState([]);
  const [num, setNum] = useState("")

  console.log(listaDeTarefas);

  const nome = { tarefas: tarefas, num: num, id: Date.now() };


  const handleClick = () => {
    if (tarefas === "") {
    }
    else {
      setLista([...listaDeTarefas, nome]);
    }
    setTarefas("");
    setNum("");
  };

  const Remove = (id) => {
    setLista(listaDeTarefas.filter((item) => item.id !== id));
  };

  const limpar = () => {
    setLista(listaDeTarefas.filter((item) => item.return));
  }

  return (
    <Principal>
      <Caderno>
        <Titulo>Lista de Compras</Titulo>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Quant value={num} type="Number" min="0" placeholder="Quantidade" onChange={(e) => {
            setNum(e.target.value)
          }} />

          <Produto type="text"
            value={tarefas}
            onChange={(e) => {
              setTarefas(e.target.value);
            }}
          />
          <button onClick={() => handleClick()}>Anotar</button>
          <button onClick={() => limpar()}> Limpar</button>
        </Form>

        <div>
          {listaDeTarefas.map((item, index) => (
            <Result key={index}>
              <p>{item.num}</p>

              <Label>
                <input type="checkbox" />

                <label key={index}> {item.tarefas} </label>

              </Label>
              <button
                onClick={() => {
                  Remove(item.id);
                }}
              >
                Remover
              </button>
            </Result>
          ))}
        </div>
      </Caderno>
    </Principal>
  );
}



export default Main;
