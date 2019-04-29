import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <i class="fab fa-instagram"></i>
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram" /></h1>
            <i class="far fa-compass" ></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
            </div>
        )
    }
}

export default SearchBar;