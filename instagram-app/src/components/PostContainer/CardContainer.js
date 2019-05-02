import React from '../../../node_modules/react';
import CommentSection from './CommentSection';
import PropTypes, { string, number, array } from '../../../node_modules/prop-types';

class CardContainer extends React.Component {
  render() {
  return (
    <>
      {this.props.user.map ((user) => (
      <div className="cards" key={user.id}>
        <h1 className="postHead"><img className="userThumb"src={user.thumbnailUrl} alt={user.username} />{user.username} </h1>
        <img className="postImg"src={user.imageUrl} alt={user.username} />
        <CommentSection user={user} onSubmit={this.props.onSubmit} deleteCommentHandler={this.props.deleteCommentHandler} likeClickHandler={this.props.likeClickHandler} />
        </div>
      ))}
    </>
    )
  }
}


CardContainer.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      username: string.isRequired,
      imageUrl: string,
      timestamp: string,
      likes: number,
      comments: array,
      thumbnailUrl: string
    }).isRequired
  )
}

export default CardContainer;