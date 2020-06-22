import React, { Fragment, Component } from 'react';
import SearchNameInput from './SearchNameInput';

class SearchNameNavInput extends Component {
  filters = this.props.location.state.filters;
  render() {
    return (
      <Fragment style={{ display: 'none' }}>
        <SearchNameInput searchByName={this.props.searchByName(this.filters)} />
      </Fragment>
    );
  }
}

export default SearchNameNavInput;
