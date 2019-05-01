import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

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

    onSubmit = event => {
        const user = localStorage.getItem('user')
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments].concat({
                username: `${user}`,
                text: event.target.querySelector('.newComment').value,
                id: Date.now()
            })
        })
        event.target.reset();
    }

    likeClickHandler = event => {
        const likeLogic = this.state.likes === this.props.user.likes 
        this.setState({
            likes: likeLogic ? this.state.likes + 1 : this.state.likes - 1
        })
        console.log(event.target)
        event.target.classList.toggle('likedPost')
    }

    deleteCommentHandler = event => {
     const id = event.target.id
        const allComments = [...this.state.comments]
        console.log(allComments, id)
        let savedComments = allComments.filter(deleteThisComment => id !== deleteThisComment.id.toString());
        console.log(savedComments)
        this.setState({
            comments: savedComments
        })
    }

    newCommentFocus = event => {
        let postId = event.target.id
        let postField = document.getElementById(`${postId} input`)
        postField.focus();
    }

    render() {
        const timestamp = this.props.user.timestamp
        const comments = this.state.comments
        const likes = this.state.likes
        return(
            <div className="commentSection">
                <div className="postButtons">
                    <i className="far fa-heart fa-lg" onClick={this.likeClickHandler} id={timestamp}></i><i className="far fa-comment fa-lg"onClick={this.newCommentFocus} id={timestamp}></i>
                </div>
                <p className="likes">{likes} likes</p>
                <div>
                    {comments && comments.map((comment, i) => <Comment key={i} comment={comment} onClick={this.deleteCommentHandler}/>)}
                </div>
                <h3 className="timeStamp">{timestamp}</h3>
                <div className="newComment">
                    <form onSubmit={this.onSubmit}>
                            <input
                            className="newComment input" 
                            type="text"
                            placeholder="Add a comment..."
                            id={timestamp + " input"}
                            />
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection;