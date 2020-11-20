import React from "react";
import "./SearchInput.css";

function SearchInput(props) {
    return (
        <>
            <form className="form">
                <input className="searchInputBox" type="text" name="search" placeholder="Search Employee by Name" onChange={props.handleInputChange}
                /> 
            </form>
        </>
    )
}

export default SearchInput;