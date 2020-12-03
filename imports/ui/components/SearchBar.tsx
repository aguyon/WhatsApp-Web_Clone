import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import StyledSearchBar from '../elements/StyledSearchBar';

interface SearchBarProps {
  placeholder: string;
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
      </label>
    </StyledSearchBar>
  );
};

export default SearchBar;
