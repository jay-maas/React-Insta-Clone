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

onSubmit = (inputValue, id) => {
  let commentSubmit = this.state.userData.filter(user =>
    user.id === id)
  const user = localStorage.getItem('user')
  commentSubmit[0].comments = [...commentSubmit[0].comments, 
    {
  username: `${user}`,
  text: `${inputValue}`,
  id: Date.now()
    }
  ]
  this.setState({
    userData: this.state.userData.map(user => user===user.id ? commentSubmit : user)
    })
  }

  deleteCommentHandler = (eventId, userId) => {
    let allComments = this.state.userData.filter(user => user.id === userId)
    allComments[0].comments = allComments[0].comments.filter(comment => eventId != comment.id)
    this.setState({
        userData: this.state.userData.map(user => user.id === user ? allComments : user )
    })
   }

   likeClickHandler = (eventId, userId, prevLikeCount) => {
     let likeCount = this.state.userData.filter(user => user.id === userId)
     const likeLogic = likeCount[0].likes === prevLikeCount
     likeCount[0].likes = likeLogic ? likeCount[0].likes + 1 : likeCount[0].likes - 1
     this.setState({
       userData: this.state.userData.filter(user => userId === user.id ? likeCount[0].likes : user)
     })
     console.log(this.state.userData)
  }

  render() {
    return (
      <div className="PostsPage">

        <div className="searchContainer">
          <SearchBar onSubmit={this.searchHandler} />
        </div>
        <div className="cardContainer">
          <CardContainer user={this.state.userData} onSubmit={this.onSubmit} deleteCommentHandler={this.deleteCommentHandler} likeClickHandler={this.likeClickHandler} />
        </div>
        <i onClick={this.logOut} className="fas fa-sign-out-alt fa-2x logOutButton"></i>
      </div>
    )
  }
}

export default PostsPage;