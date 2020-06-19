import React from 'react';
import "./KeyPadComponent.css";

class KeyPadComponent extends React.Component{
  render(){
    return (
      <div className="button">
                <button className="inbutton" name="(" onClick={e=> this.props.onClick(e.target.name) }>(</button>
                <button className="inbutton" name="←" onClick={e => this.props.onClick(e.target.name)}>←</button>
                <button className="inbutton" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="inbutton" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>

                <button className="inbutton" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="inbutton" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="inbutton" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="inbutton" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>

                <button className="inbutton" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="inbutton" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="inbutton" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="inbutton" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>

                <button className="inbutton" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="inbutton" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="inbutton" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="inbutton" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>

                <button className="inbutton" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="inbutton" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="inbutton" style={{background: "orange  "}} name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="inbutton" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
            </div>
        );
    }
}
export default KeyPadComponent;
