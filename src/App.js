import React from "react";
import styled from "styled-components";

export const Titulo = styled.h1`
  color: white;
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
`;
export const Calculadora = styled.div`
  background-color: greenyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 400px;
  width: 40vw;
  border-radius: 5px;

  input {
    width: 40%;
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  button {
    background-color: white;
    margin: 0.2rem;
    border: none;
    width: 100%;
    cursor: pointer;
  }
  h2 {
    width: 30%;
    background-color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export default class App extends React.Component {
  state = {
    n1: "",
    n2: "",
    resultado: ""
  };

  soma = () => {
    this.setState({
      resultado: Number(this.state.n1 + this.state.n2)
    });
  };
  subtracao = () => {
    this.setState({
      resultado: this.state.n1 - this.state.n2
    });
  };
  divisao = () => {
    this.setState({
      resultado: this.state.n1 / this.state.n2
    });
  };
  multiplicacao = () => {
    this.setState({
      resultado: this.state.n1 * this.state.n2
    });
  };
  clear = () => {
    this.setState({
      resultado: "",
      n1: "",
      n2: ""
    });
  };
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };
  render() {
    return (
      <Calculadora>
        <Titulo>Calculadora</Titulo>
        <input type="number" onChange={this.handleChange1} />
        <input type="number" onChange={this.handleChange2} />
        <div>
          <button onClick={this.soma}>+</button>
          <button onClick={this.subtracao}>-</button>
          <button onClick={this.divisao}>/</button>
          <button onClick={this.multiplicacao}>x</button>
          <button onClick={this.clear}>C</button>
        </div>
        <h2>{this.state.resultado}</h2>
      </Calculadora>
    );
  }
}
