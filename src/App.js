import React, { Component } from 'react';
import axios from 'axios';
import Button from './components/Button'

const server = 'https://qiita.com/api/v2/schema';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      result: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    const res = await axios.get(server).catch((err) => {
      this.setState({
        status: true,
        result: err
      })
    })
    console.log(res);
    this.setState({
      state: true,
      result: res.data
    });
    console.log(this.state);

  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
        <Button handleAdd={this.handleClick}>Get Data</Button>
      </div>
    );
  }
}

export default App;
