import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: []
        }
    }

    componentDidMount() {
        this.setState({
            likes: this.props.user.likes
        })
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
        const eventId = event.target.id
        const userId = this.props.user.id
        const prevLikeCount = this.state.likes
        this.props.likeClickHandler(eventId, userId, prevLikeCount)
        event.target.classList.toggle('likedPost')
    }

    render() {
        const timestamp = this.props.user.timestamp
        const comments = this.props.user.comments
        const likes = this.props.user.likes
        return(
            <div className="commentSection">
                <div className="postButtons">
                    <i className="far fa-heart fa-lg" onClick={this.like} userid={this.props.user.id} id={timestamp}></i><i className="far fa-comment fa-lg"onClick={this.newCommentFocus} id={timestamp}></i>
                </div>
                <p className="likes">{likes} likes</p>
                <div>
                    {comments && comments.map(comment => <Comment key={comment.id} comment={comment} onClick={this.delete}/>)}
                </div>
                <h3 className="timeStamp">{timestamp}</h3>
                <div className="newComment">
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
                </div>
            </div>
        )
    }
}

export default CommentSection;