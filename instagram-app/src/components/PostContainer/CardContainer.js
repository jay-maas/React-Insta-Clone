import React from 'react';
import Comment from './Comment';
import PropTypes, { string } from 'prop-types';

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
    let comment = comments.map((comment, i) =>
      <Comment comment={comment} key={i} />
      )
    
    return (
      <div>
        <h1><img src={thumbnailUrl} alt={username} />{username} </h1>
        <img src={imageUrl} alt={username} />
        <i className="far fa-heart"></i><i className="far fa-comment"></i>
        {likes} likes 
        {comment}
        {timestamp}
      </div>
      
    )
  }
}


CardContainer.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      username: string.isRequired 
    }).isRequired
  )
}

export default CardContainer;