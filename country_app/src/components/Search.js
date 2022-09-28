import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);

    //eslint disabled by this comment in searchText

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search Country"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
