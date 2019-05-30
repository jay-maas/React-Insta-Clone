import React from '../../../node_modules/react';
import CommentSection from './CommentSection';
import PropTypes, { string, number, array } from '../../../node_modules/prop-types';
import { CardsWrapper, PostHead } from '../Style/logInStyles';

class CardContainer extends React.Component {
  render() {
  return (
    <>
      {this.props.user.map ((user) => (
      <CardsWrapper key={user.id}>
        <PostHead><img className="userThumb"src={user.thumbnailUrl} alt={user.username} />{user.username} </PostHead>
        <img className="postImg"src={user.imageUrl} alt={user.username} />
        <CommentSection user={user} onSubmit={this.props.onSubmit} deleteCommentHandler={this.props.deleteCommentHandler} likeClickHandler={this.props.likeClickHandler} />
        </CardsWrapper>
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