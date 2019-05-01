import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

class LogIn extends React.Component {
    logIn = event => {
        event.preventDefault()
        if(localStorage.getItem('user')) {
        } else {
            console.log()
        // const usernameInput = event.target.querySelector('.logInUsername').value
        //   localStorage.setItem('user', {usernameInput})
        }
        document.location.reload();
    }
    render(){
        return(
            <>
            <div className="searchContainer">
                <SearchBar />
            </div>
                <h1>Log In</h1>
                <form>
                    <h3>Enter your username</h3>
                    <input className="logInUsername" type="text" />
                    <h3>Enter your password</h3>
                    <input />
                </form>
                <button onClick={this.logIn}>Log In</button>
            </>
        )
    }
}

export default LogIn;