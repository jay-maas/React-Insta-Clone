import React from 'react';
import Comment from './Comment';

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      likes: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.user.comments,
      likes: this.props.user.likes
    })
  }
  render() {
    const likes = this.state.likes
    const {username, thumbnailUrl, timestamp, imageUrl} = this.props.user
    const comments = this.state.comments
    let comment = comments.map( comment =>
      <Comment comment={comment} key={comment.text} />
      )
    
    return (
      <div>
        <h1><img src={thumbnailUrl} alt={username} />{username} </h1>
        <img src={imageUrl} alt={username} />
        <i class="far fa-heart"></i><i class="far fa-comment"></i>
        {likes} likes 
        {comment}
        {timestamp}
      </div>
      
    )
  }
}

export default CardContainer;