import React from 'react';
import SearchResults from './SearchResults';
import Spinner from '../popup/Spinner';

const SearchResultsSearch = (props) => {
  return (
    <React.Fragment>
      <SearchResults
        divId={'searchResultsSearch'}
        resultsArray={props.resultsArray}
        buttonText="Return to Search"
      />
      <Spinner />
    </React.Fragment>
  );
};

export default SearchResultsSearch;
