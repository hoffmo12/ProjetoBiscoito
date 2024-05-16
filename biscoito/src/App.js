import React, {Component} from 'react';
import './estilo.css';  

import biscoito from './assets/biscoito.png';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state ={
      textoFrase: ''

    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [' Siga os bons e aprenda com eles', 'Bom-senso vale mais doq muito conhecimneto','O riso é a menor distancia entre duas pessoas','Deixe de lado as preocupaçoes e seja feliz','Realize o obvio, pense no improvavel e conquiste o impossivel','Acredite em milagres, masn nao dependa deles','A maior barreira para o sucesso é o medo do fracasso'];
  }

  quebrarBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    state.textoFrase = this.frases[numeroAleatorio]
    this.setState(state);
  }

  render(){

    return(
      <div className='container'>
        <img src={biscoito} classname="img" alt="imagem do biscoito"/> 
        <Botao acao={this.quebrarBiscoito} nome={"Abrir Biscoito"}/>
        <h3 classname='textofrase'>{this.state.textoFrase}</h3>
      </div>

    );
  }
}

class Botao extends Component{
    render(){
      return(
        <div>
          <button onClick={this.props.acao}>{this.props}</button>

        </div>

      )


    }
}

export default App;