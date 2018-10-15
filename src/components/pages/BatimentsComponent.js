import React, { Component } from 'react';

class BatimentComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.currentPage!=='batiments') {
      this.props.changePage('batiments');
    }
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
