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
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments].concat({
                username: '',
                text: event.target.querySelector('.newComment').value,
                id: Date.now()
            })
        })
        event.target.reset();
    }

    likeClickHandler = () => {
        const likeLogic = this.state.likes === this.props.user.likes 
        this.setState({
            likes: likeLogic ? this.state.likes + 1 : this.state.likes - 1
        })
    }

    deleteCommentHandler = event => {
     const id = event.target.id
        const allComments = [...this.state.comments]
        let savedComments = allComments.filter(deleteThisComment => id != deleteThisComment.id);
        this.setState({
            comments: savedComments
        })
    }

    render() {
        const timestamp = this.props.user.timestamp
        const comments = this.state.comments
        const likes = this.state.likes
        return(
            <div className="commentSection">
                <div className="postButtons">
                    <i className="far fa-heart fa-lg" onClick={this.likeClickHandler}></i><i className="far fa-comment fa-lg"></i>
                </div>
                <p className="likes">{likes} likes</p>
                <div>
                    {comments && comments.map((comment, i) => <Comment key={i} comment={comment} onClick={this.deleteCommentHandler}/>)}
                </div>
                <h3 className="timeStamp">{timestamp}</h3>
                <div className="newComment">
                    <form onSubmit={this.onSubmit}>
                            <input
                            className="newComment" 
                            type="text"
                            placeholder="Add a comment..."
                            />
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentSection;