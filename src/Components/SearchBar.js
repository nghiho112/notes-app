import React from "react";
import {FiSearch} from 'react-icons/fi';

class SearchBar extends React.Component {
    render(){
        return (
            <div className="search">
                <FiSearch />
                <input type="text" placeholder="Type to search...      " />
            </div>
        )
    }
}
export default SearchBar;