import React, { Component } from 'react';
import Attraction from '../../classes/Attraction';

class AttractionComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.currentPage!=='attractions') {
      this.props.changePage('attractions');
    }
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
