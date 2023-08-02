import React, { Component } from 'react';

class Clas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Clas;

