import React from '../../../node_modules/react';

class SearchForm extends React.Component {
    render() {
        return(
            <div>
            <form>
                <input 
                className="search"
                type="search"
                ref="cards"
                placeholder="&#xf002; Search"
                />
            </form >

            </div>
        )
    }
}

export default SearchForm;