import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.user.comments,
            likes: props.user.likes
        }
    }

    onSubmit = event => {
        
        this.setState({
            comments: [...this.state.comments].concat({
                username: '',
                text: event.target.querySelector('.newComment').value
            })
        })
        event.target.reset();
        event.preventDefault();
    }

    clickHandler = () => {

        this.setState({
            likes: this.state.likes + 1
            })
    }

    render() {
        const timestamp = this.props.user.timestamp
        const comments = this.state.comments
        const likes = this.state.likes
        return(
            <div className="commentSection">
                <div className="postButtons">
                    <i className="far fa-heart fa-lg" onClick={this.clickHandler}></i><i className="far fa-comment fa-lg"></i>
                </div>
                <p className="likes">{likes} likes</p>
                <div>
                    {comments && comments.map((e, i) => <Comment key={i} comment={e} />)}
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