import React from "react";
import { animals } from "./animals";

const Search = (props) => {
    return (
        <div className="search">
            <h1>{animals.length} Animals</h1>
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default Search