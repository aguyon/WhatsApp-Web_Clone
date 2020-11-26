import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import StyledSearchBar from '../elements/StyledSearchBar';

const SearchBar: React.FC = (props): JSX.Element => {
  return (
    <StyledSearchBar>
      <label className="searchbar--label">
        <FontAwesomeIcon icon={faSearch} className="searchbar--icon" />
        <input
          className="searchbar--input"
          placeholder="Rechercher ou démarrer une nouvelle discussion"
        />
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;
