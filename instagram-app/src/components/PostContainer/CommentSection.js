import React from 'react';
import Comment from './Comment';
import { CommentWrapper, PostButtons , PostLikes, Timestamp, NewCommentForm } from '../Style/logInStyles';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: false
        }
    }

    newCommentFocus = event => {
        let postId = event.target.id
        let postField = document.getElementById(`${postId} input`)
        postField.focus();
    }

    submit = event => {
        event.preventDefault();
        const value = event.target.querySelector('.newComment').value.toString()
        const id = this.props.user.id
        this.props.onSubmit(value, id)
        event.target.reset();
    }

    delete = event => {
        event.preventDefault();
        const eventId = event.target.id
        const userId = this.props.user.id
        this.props.deleteCommentHandler(eventId, userId)
    }

    like = event => {
        this.setState({
            isLiked: !this.state.isLiked
        })
        const userId = this.props.user.id
        const isLiked = this.state.isLiked
        this.props.likeClickHandler(userId, isLiked)
        event.target.classList.toggle('likedPost')
    }

    render() {
        const { timestamp, comments, likes } = this.props.user
        return(
            <CommentWrapper>
                <PostButtons>
                    <i className="far fa-heart fa-lg" onClick={this.like} userid={this.props.user.id} id={timestamp}></i><i className="far fa-comment fa-lg"onClick={this.newCommentFocus} id={timestamp}></i>
                </PostButtons>
                <PostLikes>{likes} likes</PostLikes>
                
                    {comments && comments.map(comment => <Comment key={comment.id} comment={comment} onClick={this.delete}/>)}
                
                <Timestamp>{timestamp}</Timestamp>
                <NewCommentForm>
                    <form     
                    userid={this.props.user.id}
                    onSubmit={this.submit}>
                            <input
                            className="newComment input" 
                            type="text"
                            placeholder="Add a comment..."
                            id={timestamp + " input"
                            }
                            />
                    </form>
                </NewCommentForm>
            </CommentWrapper>
        )
    }
}

export default CommentSection;