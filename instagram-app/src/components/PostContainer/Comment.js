import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: []
        }
    }
    
    render() {
        const {username, text} = this.props.comment
        return (
            <div>
            <h2>{username}</h2>
            <p>{text}</p>
      </div>
        )
    }
}

export default Comment;