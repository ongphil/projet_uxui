import React, { Component } from 'react';

class AttractionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        Attractions
      </div>
    );
  }
}

export default AttractionComponent;
