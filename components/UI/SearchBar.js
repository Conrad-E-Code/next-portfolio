import React from "react";

const SearchBar = ({setSearch}) => {
  function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
  }
  return (
    <form className=" justify-center mb-4 hidden md:pt-0 sm:pt-4 sm:flex">
        <input onChange={handleChange} placeholder="Search" className="py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"></input>
    </form>
  )
};

export default SearchBar;
