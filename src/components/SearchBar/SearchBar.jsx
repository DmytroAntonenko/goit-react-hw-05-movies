import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BiSearchAlt } from 'react-icons/bi';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => setSearch(event.currentTarget.value);
  
  const handleSubmit = event => {
    const formSearch = event.currentTarget;
        event.preventDefault();
        if(search.trim() === '') {
          
          toast.warning("Введіть пошук");
          return;
        }
    
        onSubmit(search);
        formSearch.reset();
      };

  return (
    <header className="Searchbar">
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input className="SearchForm-input" type="text" name="name"  onChange={handleChange} />
      <button type="submit" className="SearchForm-button"><BiSearchAlt size={32} /></button>
    </form>
     </header>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;