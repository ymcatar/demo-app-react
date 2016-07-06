import React from 'react';
import _ from 'lodash';

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
            .filter(({ speaker }) => _.startsWith(_.lowerCase(speaker), _.lowerCase(this.props.filter)))
            .map((item, i) => <Talk key={i} {...item} />)
        }
      </div>
    );
  }

}