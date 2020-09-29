import React from "react";

// Present search form

const AppForm = (props) => {
  const inputEl = React.useRef(null);

  // Get value of entry and pass to onSearch

  const handleSearch = (e) => {
    e.preventDefault();
    props.onSearch(inputEl.current.value);
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        className="search-bar"
        type="text"
        placeholder="Banana"
        ref={inputEl}
        required
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default AppForm;
