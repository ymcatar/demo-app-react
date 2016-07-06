import React from 'react';
import data from './data.js';

import Talk from './Talk.jsx';

export default class List extends React.Component {

  constructor(...props) {
    super(...props);
    this.state = { data };
  }

  render() {
    return (
      <div className="jumbotron" style={{marginTop: 20}}>
        {
          this.state.data
            .map(item => <Talk {...item} />)
        }
      </div>
    );
  }

}