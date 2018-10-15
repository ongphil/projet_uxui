import React, { Component } from 'react';

class MaintenanceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        Maintenance
      </div>
    );
  }
}

export default MaintenanceComponent;
