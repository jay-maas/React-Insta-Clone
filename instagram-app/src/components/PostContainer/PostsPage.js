import React from 'react';
import dummyData from '../../dummy-data';
import CardContainer from './CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import Fuse from 'fuse.js';

class PostsPage extends React.Component {
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

  logOut = event => {
    event.preventDefault();
    localStorage.clear();
    document.location.reload();
}


//Change logic
  onSubmit = event => {
    // const user = localStorage.getItem('user')
    event.preventDefault();
    console.log(this.state)
    // this.setState({
    //     comments: [...this.state.userData.comments].concat({
    //         username: `${user}`,
    //         text: event.target.querySelector('.newComment').value,
    //         id: Date.now()
    //     })
    // })
    event.target.reset();
  }
  
  render() {
    return (
      <div className="PostsPage">

        <div className="searchContainer">
          <SearchBar onSubmit={this.searchHandler} />
        </div>
        <div className="cardContainer">
          <CardContainer user={this.state.userData} onSubmit={this.onSubmit} />
        </div>
        <i onClick={this.logOut} className="fas fa-sign-out-alt fa-2x logOutButton"></i>
      </div>
    )
  }
}

export default PostsPage;