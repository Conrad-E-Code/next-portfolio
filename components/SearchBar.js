import React from "react";

const SearchBar = ({setSearch}) => {
  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }
  return (
    <form>
        <input onChange={handleChange} placeholder="Search" ></input>
    </form>
  )
};

export default SearchBar;
