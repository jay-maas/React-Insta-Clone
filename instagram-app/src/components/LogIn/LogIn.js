import React from 'react';

class LogIn extends React.Component {
    logIn = event => {
        event.preventDefault()
        if(localStorage.getItem('user')) {
        } else {
        const usernameInput = document.querySelector('.logInUsername').value
        localStorage.setItem('user', `${usernameInput}`)
        const passwordInput = document.querySelector('.logInPassword').value
        localStorage.setItem('password', `${passwordInput}`)
        }
        document.location.reload();
    }
    render(){
        return(
            <>
                <h1>Log In</h1>
                <form>
                    <h3>Enter your username</h3>
                    <input className="logInUsername" type="text" />
                    <h3>Enter your password</h3>
                    <input className="logInPassword" type="text"/>
                </form>
                <button onClick={this.logIn}>Log In</button>
            </>
        )
    }
}

export default LogIn;