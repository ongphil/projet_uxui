import React, { Component } from 'react';

class MaintenanceComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.currentPage!=='maintenances') {
      this.props.changePage('maintenances');
    }
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
