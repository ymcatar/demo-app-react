import React from 'react';
import _ from 'lodash';

const styles = {
  main: {
    display: 'flex'
  }
};

export default class Filter extends React.Component {

  constructor(...props) {
    super(...props);
    this.state = { filter: '' };
    _.bindAll(this, ['onChange', 'onSubmit']);
  }

  onChange(e) {
    this.setState({ filter: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    alert(this.state.filter);
  }

  render() {
    return (
      <form style={styles.main} onSubmit={this.onSubmit}>
        <input className="form-control" placeholder="Speaker" value={this.state.filter} onChange={this.onChange}/>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }

}