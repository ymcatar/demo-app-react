import React from 'react';

import Filter from './Filter';

const styles = {
  main: {
    padding: 30
  }
};

export default class Main extends React.Component {

  constructor(...props) {
    super(...props);
  }

  render() {
    return (
      <div className="container" style={styles.main}>
        <Filter />
      </div>
    );
  }

}