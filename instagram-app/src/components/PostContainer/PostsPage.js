import React from 'react';
import dummyData from '../../dummy-data';
import CardContainer from './CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import Fuse from 'fuse.js';
import { HeaderWrapper, PostsPageWrapper, CardContainerWrapper } from '../Style/logInStyles';

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

onSubmit = (inputValue,userId) => {
  const username = localStorage.getItem('user')
  let commentSubmit = this.state.userData.map(user => user.id === userId ? {...user, comments: [...user.comments, 
    {
    username: `${username}`,
    text: `${inputValue}`,
    id: Date.now()
    }
  ]} : user )
  this.setState({
    userData: commentSubmit
    })
  }

  deleteCommentHandler = (eventId, userId) => {
    let allComments = this.state.userData.map(user => user.id === userId ? {...user, comments: user.comments.filter(comment => eventId != comment.id)} : user)
    console.log(eventId)
    console.log(allComments)
    this.setState({
        userData: allComments
    })
   }

   likeClickHandler = (userId, isLiked) => {
     let posts = this.state.userData.map(user => user.id === userId ? isLiked ? {...user, likes: user.likes - 1} : {...user, likes: user.likes + 1} : user)
     this.setState({
       userData: posts
     })
    }

  render() {
    return (
      <PostsPageWrapper>

        <HeaderWrapper>
          <SearchBar onSubmit={this.searchHandler} />
        </HeaderWrapper>
        <CardContainerWrapper>
          <CardContainer user={this.state.userData} onSubmit={this.onSubmit} deleteCommentHandler={this.deleteCommentHandler} likeClickHandler={this.likeClickHandler} />
        </CardContainerWrapper>
        <i onClick={this.logOut} className="fas fa-sign-out-alt fa-2x logOutButton"></i>
      </PostsPageWrapper>
    )
  }
}

export default PostsPage;