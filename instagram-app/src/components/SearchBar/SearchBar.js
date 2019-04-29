import React from 'react';
import SearchForm from './SearchForm';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <i className="fab fa-instagram"></i>
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram" /></h1>
            <SearchForm />
            <i className="far fa-compass" ></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
        )
    }
}

export default SearchBar;