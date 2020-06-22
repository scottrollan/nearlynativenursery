import React from 'react';
import SearchResults from './SearchResults';
import Spinner from '../../popup/Spinner';

const SearchResultsNav = (props) => {
  return (
    <React.Fragment>
      <SearchResults
        divId={'searchResultsNav'}
        resultsArray={props.resultsArray}
        buttonText="Close"
      />
      <Spinner />
    </React.Fragment>
  );
};

export default SearchResultsNav;
