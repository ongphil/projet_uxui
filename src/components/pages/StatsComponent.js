import React, { Component } from 'react';

class StatComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.currentPage!=='stats') {
      this.props.changePage('stats');
    }
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
