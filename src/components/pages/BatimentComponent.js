import React, { Component } from 'react';

class BatimentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        Batiments
      </div>
    );
  }
}

export default BatimentComponent;
