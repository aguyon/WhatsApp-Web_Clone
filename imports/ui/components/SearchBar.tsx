import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import StyledSearchBar from '../elements/StyledSearchBar';

interface SearchBarProps {
  placeholder: string;
  searchedValue: string;
  setSearchedValue: Function;
  onSearch: (searchedValue: string) => void;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const [state, setState] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchedValue: string = event.target.value;

    setState(searchedValue);

    props.onSearch(searchedValue);
  };

  return (
    <StyledSearchBar>
      <label className="searchbar--label">
        <FontAwesomeIcon icon={faSearch} className="searchbar--icon" />
        <input
          className="searchbar--input"
          placeholder={props.placeholder}
          value={state}
          onChange={handleChange}
        />
        {props.searchedValue ? (
          <FontAwesomeIcon
            icon={faTimes}
            className="searchbar--icon-close"
            onClick={() => {
              props.setSearchedValue('');
              setState('');
            }}
          />
        ) : null}
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;
