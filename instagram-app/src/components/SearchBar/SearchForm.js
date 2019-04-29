import React from 'react';

class SearchForm extends React.Component {
    render() {
        const searchFill = <i class="fas fa-search"></i>
        return(
            <div>
            <form>
                <i class="fas fa-search"></i>
                <input 
                type="search"
                ref="cards"
                placeholder="Search"
                />
            </form >

            </div>
        )
    }
}

export default SearchForm;