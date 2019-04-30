import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {likes, comments, timestamp} = this.props.user
        return(
            <div className="commentSection">
                <div className="postButtons">
                    <i className="far fa-heart fa-lg"></i><i className="far fa-comment fa-lg"></i>
                </div>
                <p className="likes">{likes} likes</p>
                <div>
                    {comments && comments.map((e, i) => <Comment key={i} comment={e} />)}
                </div>
                <h3 className="timeStamp">{timestamp}</h3>
                <div className="newComment">
                    <form>
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