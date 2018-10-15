import React, { Component } from 'react';

class PersonnelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        Personnel
      </div>
    );
  }
}

export default PersonnelComponent;
