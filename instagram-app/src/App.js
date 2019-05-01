import React from '../node_modules/react';
import dummyData from './dummy-data';
import CardContainer from './components/PostContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Fuse from 'fuse.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:[]
    }
  }

  searchHandler = event => {
    event.preventDefault();
    var options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
      ]
    };
    var fuse = new Fuse(this.state.userData, options); // "list" is the item array
    var result = fuse.search(event.target.querySelector('.search').value);
    this.setState({
      userData: result
      })
    event.target.reset();
  }
  
  componentDidMount() {
    this.setState({
      userData: dummyData
    })
  }
  
  render() {
    return (
      <div className="App">

        <div className="searchContainer">
          <SearchBar onSubmit={this.searchHandler} />
        </div>
        <div className="cardContainer">
          <CardContainer user={this.state.userData} />
        </div>
      </div>
    )
  }
}

export default App;
