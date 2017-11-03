import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pg1 from './playgrounds/Pg1'
import Pg2 from './playgrounds/Pg2'
import Pg3 from './playgrounds/Pg3'

class App extends Component {

  state = {
    pg : 2
  }

  componentDidMount(){
  }

  playgrounds = [
    <Pg1/> ,
    <Pg2/> ,
    <Pg3/> ,
  ]

  render() {
    return (
      <div className="App">
          <div className="playground-list">
            <div className="playground-list-item" onClick={() => this.setState({pg: 0})}> Playground #01 - Order and Chaos</div>
            <div className="playground-list-item" onClick={() => this.setState({pg: 1})}> Playground #02 - Sticky Info </div>
            <div className="playground-list-item" onClick={() => this.setState({pg: 2})}> Playground #03 - Recursive Family Tree </div>
          </div>

          {
            this.playgrounds[this.state.pg]
          }

      </div>
    );
  }
}

export default App;



