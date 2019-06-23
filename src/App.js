import React, { Component } from 'react';

class App extends Component {
  handleClick(event) {
    console.log('handleClick is called');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
      </div>
    );
  }
}

export default App;
