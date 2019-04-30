import React from '../../../node_modules/react';

class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {username, text, id} = this.props.comment
        return (
        <div className="singleComment" >
            <h2>{username}</h2>
            <p>{text}</p>
            <button onClick={this.props.onClick} id={id} />
        </div>
        )
    }
}

export default Comment;