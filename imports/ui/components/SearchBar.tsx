import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import StyledSearchBar from '../elements/StyledSearchBar';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  return (
    <StyledSearchBar>
      <label className="searchbar--label">
        <FontAwesomeIcon icon={faSearch} className="searchbar--icon" />
        <input className="searchbar--input" placeholder={props.placeholder} />
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;
