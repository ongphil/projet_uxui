import React, { Component } from 'react';

class StatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        Stats
      </div>
    );
  }
}

export default StatComponent;
