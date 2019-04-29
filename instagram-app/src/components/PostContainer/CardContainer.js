import React from 'react';
import Comment from './Comment'

class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.user.comments
    })
  }
  render() {
    const {username, thumbnailUrl, likes, timestamp} = this.props.user
    const comments = this.state.comments
    let comment = comments.map( comment =>
      <Comment comment={comment} key={comment.text} />
      )
    return (
      <div>
        <img src={thumbnailUrl} alt={username} />
        <h1>Name: {username} </h1>
        {comment}{likes}
        {timestamp}
      </div>
      
    )
  }
}

export default CardContainer;