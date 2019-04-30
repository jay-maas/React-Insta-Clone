import React from '../node_modules/react';
import dummyData from './dummy-data';
import CardContainer from './components/PostContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:dummyData
    }
  }

  render() {
    return (
      <div className="App">

        <div className="searchContainer">
          <SearchBar />
        </div>
        <div className="cardContainer">
          <CardContainer user={this.state.userData} />
        </div>
      </div>
    )
  }
}

export default App;
