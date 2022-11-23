import React, { useState } from "react";

const Search = (props) => {
    const [ searchValue, setSeacrhValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSeacrhValue(e.target.value);
    }

    const resetInputField = () => {
        setSeacrhValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input
                value = {searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    );
}


export default Search;