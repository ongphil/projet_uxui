import React, { Component } from 'react';

class PersonnelComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.currentPage!=='personnel') {
      this.props.changePage('personnel');
    }
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
