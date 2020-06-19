import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResultComponent from './ResultComponent.js';
import KeyPadComponent from './KeyPadComponent.js';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      result:""
    }
  }
  onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }
      else if(button === "←"){
          this.backspace()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };

    calculate = () =>{
      try{
        this.setState({
          result: (eval(this.state.result) || "") + ""
        })
      }
      catch(e){
        this.setState({
          result: "error"
        })
      }
    };
    reset=()=>{
      this.setState({
        result:""
      })
    };
    backspace=()=>{
      this.setState({
        result: this.state.result.slice(0,-1)
      })
    };

  render(){
    return(
      <div>
        <div className="calculator-body">
        <h1> First React calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
