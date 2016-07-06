import React from 'react';
import _ from 'lodash';

import Filter from './Filter';
import List from './List';

const styles = {
  main: {
    padding: 30
  }
};

export default class Main extends React.Component {

  constructor(...props) {
    super(...props);
    this.state = { filter: '' };
    _.bindAll(this, 'handleFilter');
  }

  handleFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div className="container" style={styles.main}>
        <Filter handleFilter={this.handleFilter}/>
        <List />
      </div>
    );
  }

}