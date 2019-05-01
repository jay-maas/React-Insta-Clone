import React from '../../../node_modules/react';

class Comment extends React.Component {
    render() {
        const {username, text, id} = this.props.comment
        return (
        <div className="singleComment" >
            <h2>{username}</h2>
            <p>{text}</p>
           <i 
           onClick={this.props.onClick} 
           id={id}
           className="deleteCommentButton far fa-trash-alt" />
        </div>
        )
    }
}

export default Comment;