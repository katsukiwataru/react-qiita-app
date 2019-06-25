import React, { Component } from 'react';

// const Button = (props) => (
//   <div>
//     <button onClick={props.handleAdd}>Get Data</button>
//   </div>
// );

// export default Button;

class Button extends Component {
  render() {
    console.log(this.props.test);
    return (
      <div>
        <button onClick={this.props.handleAdd}>Get Data</button>
      </div>
    )
  }
}

export default Button;
