import React, { Component } from 'react';
import axios from 'axios';
import Button from './components/Button'

const qiitaServer = 'https://qiita.com/api/v2/schema';

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
    const res = await axios.get(qiitaServer).catch((err) => {
      this.setState({
        status: true,
        result: err
      })
    })
    this.setState({
      state: true,
      result: res.data
    });
    console.log(res, res.data);
  }

  render() {
    const result = this.state.state ? <div>{this.state.result.description}</div> : <div>Not Yet</div>;
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
        <Button handleAdd={this.handleClick} test>Get Data</Button>
        {result}
      </div>
    );
  }
}

export default App;
