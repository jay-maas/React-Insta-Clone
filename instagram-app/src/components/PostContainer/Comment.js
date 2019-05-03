import React from '../../../node_modules/react';
import { SingleComment } from '../Style/logInStyles';

class Comment extends React.Component {
    render() {
        const {username, text, id} = this.props.comment
        return (
        <SingleComment>
            <h2>{username}</h2>
            <p>{text}</p>
           <i 
           onClick={this.props.onClick} 
           id={id}
           className="deleteCommentButton far fa-trash-alt" />
        </SingleComment>
        )
    }
}

export default Comment;