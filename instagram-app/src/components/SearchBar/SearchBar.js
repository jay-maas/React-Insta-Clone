import React from '../../../node_modules/react';
import { SearchBarWrapper, SearchBarLogos, SearchInput, SearchBarButtons } from '../Style/logInStyles';

class SearchBar extends React.Component {
    render() {
        return(
            <SearchBarWrapper>
                <SearchBarLogos>
                    <i className="fab fa-instagram fa-2x"></i>
                    <img className="instagram"src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="instagram" />
                </SearchBarLogos>

                <SearchInput>
                <form onSubmit={this.props.onSubmit}>
                    <input 
                    className="search"
                    type="search"
                    ref="cards"
                    placeholder="&#xf002; Search"
                    />
                </form >
                </SearchInput>
                <SearchBarButtons>
                    <i className="far fa-compass fa-lg" ></i>
                    <i className="far fa-heart fa-lg"></i>
                    <i className="far fa-user fa-lg"></i>
                </SearchBarButtons>
            </SearchBarWrapper>
        )
    }
}

export default SearchBar;