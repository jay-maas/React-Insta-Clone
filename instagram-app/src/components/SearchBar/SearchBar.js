import React from '../../../node_modules/react';
import SearchForm from './SearchForm';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="searchBar">
                <div className="logos">
                    <i className="fab fa-instagram fa-2x"></i>
                    <img className="instagram"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram" />
                </div>

                <div className="searchInput">
                    <SearchForm />
                </div >
                <div className="searchButtons">
                    <i className="far fa-compass fa-lg" ></i>
                    <i className="far fa-heart fa-lg"></i>
                    <i className="far fa-user fa-lg"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;