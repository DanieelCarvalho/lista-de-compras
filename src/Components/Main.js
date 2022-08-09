import React, { Component } from "react";
import { Titulo, Principal, Caderno, Result, Quant, Produto, Form, Label } from "./Style";


export default class Main extends Component {
  state = {
    task: "",
    TaskList: [],
    num: "",
    check: "",
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  handleChange2 = (event) => {
    const { num } = this.state
    this.setState({
      num: event.target.value
    })
  };


  handleEnter = (e) => {
    e.preventDefault();
  };


  handleClick = () => {
    const { task, TaskList, num } = this.state;
    if (task === "" || num === "") {
      return;

    } else {
      this.setState({
        TaskList: TaskList.concat({
          task: task,
          num: num,
          id: Date.now()

        }),
        task: "",
        num: "",


      });
    }

  };
  Limpar = (id) => {
    const { task, TaskList, num } = this.state;
    this.setState({
      TaskList: TaskList.filter((item) => {
        return;
      })
    });

  }

  remover = (id) => {
    const { TaskList } = this.state;
    this.setState({
      TaskList: TaskList.filter((item) => {
        return item.id !== id;
      })
    });

  };



  render() {
    return (
      <Principal>
        <Caderno>
          <Titulo>Lista de Compras:</Titulo>

          <Form
            onSubmit={this.handleEnter}>

            <Quant
              placeholder="Quantidade"
              value={this.state.num}
              min="0"
              type="Number"
              
              onChange={this.handleChange2}
            />

            <Produto placeholder="Produto"
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
            />

            <button onClick={this.handleClick}>Anotar</button>
            <button onClick={this.Limpar}>Limpar</button>
          </Form>

          <div>
            {this.state.TaskList.map((item, index) => (

              <Result>
                <p key={index}>{item.num}</p>
                
                <Label>
                  <input  type="checkbox" />
                  
                  <label  key={index}>{item.task}
                  
                  </label>
                  
                </Label>
                <button
                  onClick={() => {
                    this.remover(item.id);
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
}
