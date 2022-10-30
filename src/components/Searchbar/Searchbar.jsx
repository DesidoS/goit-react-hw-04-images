import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Bar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ updateState }) => {
  const [find, setFind] = useState('');
  const [prevFind, setPrevFind] = useState('');

  const onInputChange = e => {
    if (e.currentTarget.name === 'find') {
      setFind(e.currentTarget.value);
    }
  };

  const resetFieldts = () => {
    setFind('');
  };

  const onSubmit = e => {
    e.preventDefault();
    setPrevFind(find);
    if (find.trim('') === '') {
      alert('Please, enter field');
      return;
    }
    if (find.trim('') === prevFind) {
      resetFieldts();
      alert('Please, new request');
      return;
    }
    updateState(find);
    resetFieldts();
  };

  return (
    <Bar>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>
            <FcSearch />
          </SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          name="find"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={find}
          onChange={onInputChange}
        />
      </SearchForm>
    </Bar>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  updateState: PropTypes.func.isRequired,
};
