import React, { Component } from 'react';
import Button from './components/Button'

class App extends Component {
  handleClick(event) {
    console.log('handleClick is called');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
        <Button handleAdd={this.handleClick}/>
      </div>
    );
  }
}

export default App;
