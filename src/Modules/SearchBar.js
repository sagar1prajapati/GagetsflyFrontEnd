import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // You can call your API here and get suggestions based on the search term.
    // For this example, I will just use a hardcoded array of suggestions.
    const suggestions = ['apple', 'banana', 'cherry', 'date', 'elderberry'].filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(suggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    search(suggestion);
  };

  const handleSearchClick = () => {
    search(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      search(searchTerm);
    }
  };

  const search = (query) => {
    // Do something with the search term, e.g. call an API or navigate to a new page
    console.log(`Search for "${query}"`);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button onClick={handleSearchClick}>Search</button>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {suggestions.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(item)}
            style={{
              backgroundColor: '#f1f1f1',
              padding: '8px 16px',
              cursor: 'pointer',
              ':hover': { backgroundColor: '#ddd' },
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
