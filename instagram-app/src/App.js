import React from '../node_modules/react';
import dummyData from './dummy-data';
import CardContainer from './components/PostContainer/CardContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:[]
    }
  }

  searchHandler = event => {
    event.preventDefault();
    console.log(this.state.userData)
    this.setState({
      userData: this.state.userData.filter(user => {
        return user.username === event.target.querySelector('.search').value
      })
    })
    console.log(this.state.userData)
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
